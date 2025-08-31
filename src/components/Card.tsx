import React from 'react'
import Image from 'next/image'
import { ReactNode } from 'react'

export interface CardProps {
  title: string
  description?: string
  imageSrc: string
  imageAlt?: string
  price?: number | string
  badge?: string
  href?: string
  footerSlot?: ReactNode
  className?: string
}

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt = title,
  price,
  badge,
  href = '#',
  footerSlot,
  className = '',
}: CardProps) {
  return (
    <div className={`bg-light-100 rounded-lg shadow-sm ring-1 ring-light-300 hover:shadow-md transition-shadow ${className}`}>
      <div className="relative w-full aspect-square">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain bg-light-200"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <span className="absolute left-3 top-3 text-[12px] font-medium text-red-700 bg-light-100/90 px-2.5 py-1 rounded-full ring-1 ring-light-300">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-dark-900 text-[var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-medium line-clamp-2">
            <a href={href} className="hover:underline">{title}</a>
          </h3>
          {price !== undefined && (
            <span className="text-dark-900 text-[var(--text-lead)] font-semibold">
              {typeof price === 'number' ? `$${price}` : price}
            </span>
          )}
        </div>
        {description && (
          <p className="mt-1 text-dark-700 text-[var(--text-body)] leading-[var(--text-body--line-height)] line-clamp-2">
            {description}
          </p>
        )}
        {footerSlot ? (
          <div className="mt-3">{footerSlot}</div>
        ) : (
          <button className="mt-3 w-full bg-dark-900 text-light-100 py-2 rounded-md hover:bg-black/80 transition-colors">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}
