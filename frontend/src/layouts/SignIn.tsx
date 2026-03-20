import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="flex min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      
      {/* Decorative Image Side (Hidden on small screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1500&auto=format&fit=crop" 
          alt="Restaurant interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
        <div className="absolute bottom-16 left-16 right-16 text-white">
          <div className="w-12 h-1 bg-red-500 mb-8 rounded-full"></div>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-4">
            Master your floor.
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-lg leading-relaxed">
            The intelligent operating system for modern restaurants. Manage orders, orchestrate the kitchen, and delight your guests.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative">
        <div className="w-full max-w-sm mx-auto">
          {/* Brand Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600 block"></span>
              TakeOrder
            </h1>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-light text-gray-900 mb-2">Welcome back</h2>
            <p className="text-sm text-gray-500 font-medium">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-red-400 focus:ring-4 focus:ring-red-50 outline-none transition-all placeholder:text-gray-400 font-medium text-sm"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-red-400 focus:ring-4 focus:ring-red-50 outline-none transition-all placeholder:text-gray-400 font-medium text-sm letter-spacing-[0.2em]"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer" />
                <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer font-medium">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-red-600 hover:text-red-700 font-semibold transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3.5 px-4 bg-gray-900 hover:bg-black text-white font-medium rounded-xl shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign In
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-gray-100 pb-10">
            <p className="text-center text-sm text-gray-500 font-medium">
              Don't have an account?{' '}
              <Link to="/signup" className="text-gray-900 hover:text-red-600 font-bold transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
