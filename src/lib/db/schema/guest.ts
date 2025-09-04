import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const guest = pgTable('guest', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionToken: text('session_token').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: false }).notNull().defaultNow(),
  expiresAt: timestamp('expires_at', { withTimezone: false }).notNull(),
})
