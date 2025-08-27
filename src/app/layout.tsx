import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nike Store - E-commerce App',
  description: 'A modern e-commerce app built with Next.js, TypeScript, and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900">Nike Store</h1>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <a href="#" className="text-gray-500 hover:text-gray-900">Products</a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
                </nav>
              </div>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}