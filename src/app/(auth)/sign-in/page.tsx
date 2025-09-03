import SocialProviders from '@/components/SocialProviders'
import AuthForm from '@/components/AuthForm'

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <SocialProviders />
      <div className="relative">
        <hr className="border-light-300" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-100 px-3 text-caption text-dark-700">
          Or sign in with
        </span>
      </div>
      <AuthForm mode="sign-in" />
    </div>
  )
}
