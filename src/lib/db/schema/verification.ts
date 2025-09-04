import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const verification = pgTable('verification', {
  id: uuid('id').primaryKey().defaultRandom(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: false }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: false }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: false }).notNull().defaultNow().$onUpdateFn(() => sql`now()`),
})
