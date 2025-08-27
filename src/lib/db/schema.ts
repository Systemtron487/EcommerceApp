import { pgTable, serial, text, decimal, timestamp, integer } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  imageUrl: text('image_url').notNull(),
  category: text('category').notNull(),
  brand: text('brand').notNull().default('Nike'),
  sizes: text('sizes').array().notNull().default(['7', '8', '9', '10', '11', '12']),
  colors: text('colors').array().notNull().default(['Black', 'White']),
  stock: integer('stock').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})