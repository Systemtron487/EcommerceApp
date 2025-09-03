import Link from 'next/link'
import Image from 'next/image'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100svh] grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-between bg-dark-900 text-light-100 p-8 rounded-br-3xl">
        <div className="flex items-center">
          <div className="rounded-xl bg-light-100 p-2">
            <Image src="/logo.svg" alt="Logo" width={28} height={28} />
          </div>
        </div>
        <div className="space-y-4 max-w-md">
          <h2 className="text-heading-3 md:text-heading-2">Just Do It</h2>
          <p className="text-lead text-light-200/90">
            Join millions of athletes and fitness enthusiasts who trust us for their performance
            needs.
          </p>
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-light-400/80" />
            <span className="h-2 w-2 rounded-full bg-light-400/60" />
            <span className="h-2 w-2 rounded-full bg-light-400/40" />
          </div>
        </div>
        <p className="text-footnote text-light-400/80">© {new Date().getFullYear()} Nike. All rights reserved.</p>
      </div>

      <div className="flex items-center justify-center px-6 py-10 md:py-0">
        <div className="w-full max-w-md">
          <div className="text-center space-y-2 mb-6">
            <p className="text-caption text-dark-700">
              Already have an account? <Link href="/sign-in" className="underline">Sign In</Link>
            </p>
            <h1 className="text-heading-3 md:text-heading-2 text-dark-900">Join Nike Today!</h1>
            <p className="text-body text-dark-700">Create your account to start your fitness journey</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
