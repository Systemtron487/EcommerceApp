import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type LinkItem = { label: string; href?: string }
type LinkGroup = { title: string; items: LinkItem[] }

const groups: LinkGroup[] = [
  { title: 'Featured', items: [{ label: 'Air Force 1' }, { label: 'Huarache' }, { label: 'Air Max 90' }, { label: 'Air Max 95' }] },
  { title: 'Shoes', items: [{ label: 'All Shoes' }, { label: 'Custom Shoes' }, { label: 'Jordan Shoes' }, { label: 'Running Shoes' }] },
  { title: 'Clothing', items: [{ label: 'All Clothing' }, { label: 'Modest Wear' }, { label: 'Hoodies & Pullovers' }, { label: 'Shirts & Tops' }] },
  { title: "Kids'", items: [{ label: 'Infant & Toddler Shoes' }, { label: "Kids' Shoes" }, { label: "Kids' Jordan Shoes" }, { label: "Kids' Basketball Shoes" }] },
]

function IconCircle({ src, alt, fallback }: { src: string; alt: string; fallback?: string }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-light-100 text-dark-900">
      <img src={src} alt={alt} className="h-4 w-4" onError={(e) => { if (fallback) (e.currentTarget.outerHTML = `<span aria-label='${alt}'>${fallback}</span>`) }} />
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-light-100 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="shrink-0">
            <Image src="/logo.svg" width={40} height={16} alt="Nike logo" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 grow">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="text-light-100 text-[var(--text-heading-3)] font-medium mb-3">{g.title}</h3>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.href || '#'} className="text-dark-500 hover:text-light-400 transition-colors">{it.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3">
            <IconCircle src="/x.svg" alt="X" fallback="X" />
            <IconCircle src="/facebook.svg" alt="Facebook" />
            <IconCircle src="/instagram.svg" alt="Instagram" />
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-sm text-dark-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Nike. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
