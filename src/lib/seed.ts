import { db } from './db'
import { products } from './db/schema'

const nikeProducts = [
  {
    name: 'Air Jordan 1 Retro High OG',
    description: 'The Air Jordan 1 Retro High OG brings back the classic silhouette with premium materials and iconic colorways.',
    price: '170.00',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'Basketball',
    brand: 'Nike',
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: ['Black/Red', 'White/Black'],
    stock: 25,
  },
  {
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole and visible Max Air cushioning.',
    price: '120.00',
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
    category: 'Lifestyle',
    brand: 'Nike',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White/Grey', 'Black/White', 'Navy/White'],
    stock: 30,
  },
  {
    name: 'Nike Dunk Low',
    description: 'Created for the hardwood but taken to the streets, the Nike Dunk Low returns with crisp overlays and original team colors.',
    price: '100.00',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
    category: 'Lifestyle',
    brand: 'Nike',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White/Black', 'Black/White', 'University Blue'],
    stock: 40,
  },
  {
    name: 'Nike Air Force 1 \'07',
    description: 'The radiance lives on in the Nike Air Force 1 \'07, the basketball original that puts a fresh spin on what you know best.',
    price: '90.00',
    imageUrl: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop',
    category: 'Lifestyle',
    brand: 'Nike',
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    colors: ['White', 'Black', 'Triple White'],
    stock: 50,
  },
  {
    name: 'Nike React Infinity Run Flyknit 3',
    description: 'A comfortable, reliable running shoe that\'s engineered to help reduce injury and keep you on the run.',
    price: '160.00',
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
    category: 'Running',
    brand: 'Nike',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black/White', 'Blue/White', 'Grey/Orange'],
    stock: 20,
  },
  {
    name: 'Nike Blazer Mid \'77 Vintage',
    description: 'In the \'70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene.',
    price: '100.00',
    imageUrl: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop',
    category: 'Lifestyle',
    brand: 'Nike',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White/Black', 'Black/White', 'Vintage White'],
    stock: 35,
  },
]

async function seed() {
  try {
    console.log('🌱 Seeding database...')
    
    // Insert products
    await db.insert(products).values(nikeProducts)
    
    console.log('✅ Database seeded successfully!')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seed()