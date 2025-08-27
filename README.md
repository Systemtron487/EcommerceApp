# Nike E-commerce App

A modern e-commerce application built with Next.js 15, TypeScript, Tailwind CSS, Better Auth, Neon PostgreSQL, Drizzle ORM, and Zustand.

## Features

- 🛍️ Product catalog with Nike sneakers
- 🎨 Modern UI with Tailwind CSS
- 🔐 Authentication with Better Auth
- 🗄️ PostgreSQL database with Neon
- 🔄 Type-safe database queries with Drizzle ORM
- 🏪 State management with Zustand
- 📱 Responsive design
- ⚡ Server-side rendering with Next.js 15

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **State Management**: Zustand
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Neon PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your database URL and other required environment variables.

4. Generate and run database migrations:
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. Seed the database with sample Nike products:
   ```bash
   npm run db:seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The app includes a `products` table with the following fields:
- `id`: Primary key
- `name`: Product name
- `description`: Product description
- `price`: Product price (decimal)
- `imageUrl`: Product image URL
- `category`: Product category
- `brand`: Product brand (defaults to Nike)
- `sizes`: Available sizes (array)
- `colors`: Available colors (array)
- `stock`: Stock quantity
- `createdAt`: Creation timestamp
- `updatedAt`: Update timestamp

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run db:generate`: Generate database migrations
- `npm run db:migrate`: Run database migrations
- `npm run db:push`: Push schema changes to database
- `npm run db:seed`: Seed database with sample data

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
├── lib/               # Utility functions and configurations
│   ├── db/            # Database configuration and schema
│   └── auth.ts        # Authentication configuration
├── store/             # Zustand stores
└── types/             # TypeScript type definitions
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
DATABASE_URL="your-neon-postgresql-url"
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.