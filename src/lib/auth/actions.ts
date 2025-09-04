'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'
import { randomUUID } from 'crypto'
import { db } from '@/lib/db'
import { guest as guestTable } from '@/lib/db/schema/guest'
import { eq } from 'drizzle-orm'
import { auth } from '@/lib/auth'

const CREDENTIALS_PROVIDER = 'credentials'
const AUTH_COOKIE = 'auth_session'
const GUEST_COOKIE = 'guest_session'
const COOKIE_BASE = {
  httpOnly: true,
  secure: true,
  sameSite: 'strict' as const,
  path: '/',
}

const emailSchema = z.string().email().max(255)
const passwordSchema = z.string().min(8).max(255)
const nameSchema = z.string().min(1).max(255).optional()

export const signUp = async (input: { email: string; password: string; name?: string }) => {
  const parsed = z.object({ email: emailSchema, password: passwordSchema, name: nameSchema }).safeParse(input)
  if (!parsed.success) throw new Error('Invalid input')

  const body: any = {
    email: parsed.data.email,
    password: parsed.data.password,
  }
  if (parsed.data.name) body.name = parsed.data.name

  const res = await auth.api.signUpEmail({ body })

  if (!res?.user) throw new Error('Sign up failed')

  await mergeGuestCartWithUserCart()
  return { ok: true }
}

export const signIn = async (input: { email: string; password: string }) => {
  const parsed = z.object({ email: emailSchema, password: passwordSchema }).safeParse(input)
  if (!parsed.success) throw new Error('Invalid input')

  const res = await auth.api.signInEmail({
    body: {
      email: parsed.data.email,
      password: parsed.data.password,
    },
  })

  if (!res?.user && !res?.token) throw new Error('Sign in failed')

  await mergeGuestCartWithUserCart()
  return { ok: true }
}

export const signOut = async () => {
  await (auth.api as any).signOut({})
  const c = await cookies()
  c.set(GUEST_COOKIE, '', { ...COOKIE_BASE, maxAge: 0 })
  return { ok: true }
}

export const guestSession = async () => {
  const c = await cookies()
  const token = c.get(GUEST_COOKIE)?.value
  if (!token) return null
  const [row] = await db.select().from(guestTable).where(eq(guestTable.sessionToken, token))
  if (!row) return null
  if (row.expiresAt < new Date()) {
    await db.delete(guestTable).where(eq(guestTable.sessionToken, token))
    c.set(GUEST_COOKIE, '', { ...COOKIE_BASE, maxAge: 0 })
    return null
  }
  return row
}

export const createGuestSession = async () => {
  const c = await cookies()
  const existing = await guestSession()
  if (existing) return { token: existing.sessionToken }

  const token = randomUUID()
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  await db.insert(guestTable).values({
    sessionToken: token,
    expiresAt,
  })

  c.set(GUEST_COOKIE, token, { ...COOKIE_BASE, expires: expiresAt })
  return { token }
}

export const mergeGuestCartWithUserCart = async () => {
  const c = await cookies()
  const token = c.get(GUEST_COOKIE)?.value
  if (!token) return { ok: true }

  try {
  } finally {
    await db.delete(guestTable).where(eq(guestTable.sessionToken, token))
    c.set(GUEST_COOKIE, '', { ...COOKIE_BASE, maxAge: 0 })
  }

  return { ok: true }
}
