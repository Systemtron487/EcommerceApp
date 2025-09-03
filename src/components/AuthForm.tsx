'use client'
import React, { useId, useState } from 'react'
import Link from 'next/link'

type Mode = 'sign-in' | 'sign-up'

export default function AuthForm({ mode }: { mode: Mode }) {
  const [showPassword, setShowPassword] = useState(false)
  const emailId = useId()
  const passwordId = useId()
  const nameId = useId()

  return (
    <form className="space-y-4" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
      {mode === 'sign-up' && (
        <div className="space-y-2">
          <label htmlFor={nameId} className="text-caption text-dark-700">Full Name</label>
          <input
            id={nameId}
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
            autoComplete="name"
            required
          />
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor={emailId} className="text-caption text-dark-700">Email</label>
        <input
          id={emailId}
          type="email"
          placeholder="johndoe@gmail.com"
          className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
          autoComplete="email"
          required
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor={passwordId} className="text-caption text-dark-700">Password</label>
          {mode === 'sign-in' && (
            <Link href="#" className="text-caption text-dark-700 hover:underline">Forgot?</Link>
          )}
        </div>
        <div className="relative">
          <input
            id={passwordId}
            type={showPassword ? 'text' : 'password'}
            placeholder={mode === 'sign-up' ? 'minimum 8 characters' : 'your password'}
            className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 pr-12 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
            autoComplete={mode === 'sign-up' ? 'new-password' : 'current-password'}
            required
            minLength={mode === 'sign-up' ? 8 : undefined}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-3 my-auto h-8 w-8 rounded-full text-dark-700 hover:bg-light-200 flex items-center justify-center"
          >
            <span className="text-caption">{showPassword ? '🙈' : '👁️'}</span>
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-dark-900 px-6 py-4 text-light-100 text-body-medium hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-dark-900/20"
      >
        {mode === 'sign-up' ? 'Sign Up' : 'Sign In'}
      </button>

      {mode === 'sign-up' ? (
        <p className="text-footnote text-dark-700 text-center">
          By signing up, you agree to our <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy</a>
        </p>
      ) : (
        <p className="text-footnote text-dark-700 text-center">
          Don’t have an account? <Link href="/sign-up" className="underline">Sign Up</Link>
        </p>
      )}
    </form>
  )
}
