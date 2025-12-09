import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reset Password:', { email })
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {/* Background Shape */}
      <div className="absolute bottom-0 w-[150%] h-[60vh] bg-primary rounded-t-[100%] z-0 translate-y-1/4"></div>

      {/* Header Logo */}
      <h1 className="relative z-20 text-6xl font-bold text-primary mb-8 tracking-tight">TakeOrder</h1>

      {/* Forget Password Card */}
      <div className="relative z-20 w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-gray-800 mb-2">Forgot Password?</h2>
          <p className="text-sm text-gray-500">Enter your email to reset your password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary hover:bg-[#b91c2b] text-white font-medium rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 hover:cursor-pointer active:translate-y-0"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Remember your password?{' '}
          <Link to="/" className="text-primary hover:text-[#b91c2b] font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
