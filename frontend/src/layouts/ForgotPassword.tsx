import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset Password:', { email });
  };

  return (
    <div className="flex min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      
      {/* Decorative Image Side (Hidden on small screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1500&auto=format&fit=crop" 
          alt="Restaurant ambiance" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
        <div className="absolute bottom-16 left-16 right-16 text-white">
          <div className="w-12 h-1 bg-red-500 mb-8 rounded-full"></div>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-4">
            Get back on track.
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-lg leading-relaxed">
            Quickly recover your access so you can continue delivering exceptional dining experiences.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative">
        <Link to="/" className="absolute top-12 left-8 sm:left-16 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> back to login
        </Link>
        
        <div className="w-full max-w-sm mx-auto mt-12">
          {/* Brand Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600 block"></span>
              TakeOrder
            </h1>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-light text-gray-900 mb-2">Reset Password</h2>
            <p className="text-sm text-gray-500 font-medium">Enter your email and we'll send you a recovery link.</p>
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

            <button
              type="submit"
              className="w-full mt-6 py-3.5 px-4 bg-gray-900 hover:bg-black text-white font-medium rounded-xl shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-500 font-medium">
              Remember your password?{' '}
              <Link to="/" className="text-gray-900 hover:text-red-600 font-bold transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
