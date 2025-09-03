'use client'
import React from 'react'
import Image from 'next/image'

type Props = { onProviderClick?: (provider: 'google' | 'apple') => void }

export default function SocialProviders({ onProviderClick }: Props) {
  const base =
    'w-full inline-flex items-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-dark-900/10 transition'
  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className={base}
        aria-label="Continue with Google"
        onClick={() => onProviderClick?.('google')}
      >
        <Image src="/icons/google.svg" alt="" width={20} height={20} />
        <span className="mx-auto">Continue with Google</span>
      </button>
      <button
        type="button"
        className={base}
        aria-label="Continue with Apple"
        onClick={() => onProviderClick?.('apple')}
      >
        <Image src="/icons/apple.svg" alt="" width={20} height={20} />
        <span className="mx-auto">Continue with Apple</span>
      </button>
    </div>
  )
}
