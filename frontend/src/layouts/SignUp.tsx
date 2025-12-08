import { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign Up:', { name, email, password })
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {/* Background Shape */}
      <div className="absolute bottom-0 w-[150%] h-[60vh] bg-[#D72638] rounded-t-[100%] z-0 translate-y-1/4"></div>

      {/* Header Logo */}
      <h1 className="relative z-20 text-6xl font-bold text-[#D72638] mb-8 tracking-tight">TakeOrder</h1>

      {/* Sign Up Card */}
      <div className="relative z-20 w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-gray-800 mb-2">Create Account</h2>
          <p className="text-sm text-gray-500">Join us to start ordering</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 outline-none transition-all bg-gray-50"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 outline-none transition-all bg-gray-50"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 outline-none transition-all bg-gray-50"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#D72638] hover:bg-[#b91c2b] text-white font-medium rounded-lg shadow-lg shadow-[#D72638]/30 transition-all transform hover:-translate-y-0.5 hover:cursor-pointer active:translate-y-0"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/" className="text-[#D72638] hover:text-[#b91c2b] font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
