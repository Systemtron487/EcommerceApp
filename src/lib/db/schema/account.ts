import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'
import { user } from './user'

export const account = pgTable('account', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at', { withTimezone: false }),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at', { withTimezone: false }),
  scope: text('scope'),
  idToken: text('id_token'),
  password: text('password'),
  createdAt: timestamp('created_at', { withTimezone: false }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: false }).notNull().defaultNow().$onUpdateFn(() => sql`now()`),
})
