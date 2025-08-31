'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type NavLink = { label: string; href?: string }

interface NavbarProps {
  links?: NavLink[]
  cartCount?: number
  className?: string
}

const defaultLinks: NavLink[] = [
  { label: 'Men', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Collections', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Navbar({ links = defaultLinks, cartCount = 0, className = '' }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`sticky top-0 z-50 bg-light-100 border-b border-light-300 ${className}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Primary">
        <Link href="/" className="flex items-center shrink-0" aria-label="Homepage">
          <Image src="/logo.svg" alt="Nike logo" width={32} height={12} priority />
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 text-dark-900 hover:bg-light-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-900"
          aria-controls="primary-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="block h-0.5 w-6 bg-dark-900 mb-1" />
          <span className="block h-0.5 w-6 bg-dark-900 mb-1" />
          <span className="block h-0.5 w-6 bg-dark-900" />
        </button>

        <ul id="primary-menu" className="hidden md:flex items-center gap-6 text-dark-900 text-[var(--text-body)] leading-[var(--text-body--line-height)]">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href || '#'} className="hover:text-dark-700 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-dark-900 hover:text-dark-700">Search</button>
          <button className="relative text-dark-900 hover:text-dark-700">
            My Cart{cartCount > 0 ? ` (${cartCount})` : ''}
          </button>
        </div>
      </nav>

      <div className={`${open ? 'block' : 'hidden'} md:hidden border-t border-light-300 bg-light-100`} role="dialog" aria-modal="true">
        <ul className="px-4 py-3 space-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href || '#'} className="block px-2 py-2 rounded text-dark-900 hover:bg-light-200">
                {l.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-4 px-2 py-2">
            <button className="text-dark-900">Search</button>
            <button className="text-dark-900">My Cart{cartCount ? ` (${cartCount})` : ''}</button>
          </li>
        </ul>
      </div>
    </header>
  )
}
