import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import * as schema from './schema'

// Use a placeholder URL during build time if DATABASE_URL is not set
const databaseUrl = process.env.DATABASE_URL || 'postgresql://placeholder:placeholder@placeholder:5432/placeholder'

const sql = neon(databaseUrl)
export const db = drizzle(sql, { schema })
