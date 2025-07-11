import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      alert('Login attempted! (This is a demo)');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex overflow-auto w-full relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Left Side - Company Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative z-10 pl-30">
        <div className="flex flex-col justify-center items-start p-16 w-full">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-sm"></div>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-2 leading-tight">
              Enterprise
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
                ERP
              </span>
            </h1>
            <p className="text-xl text-slate-300 font-light tracking-wide">
              Business Management System
            </p>
          </div>
          
          <div className="space-y-6 text-slate-300">
            <div className="flex items-center space-x-3 group">
              <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
              <p className="text-lg">Streamline your business operations</p>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-2 h-2 bg-indigo-400 rounded-full group-hover:scale-150 transition-transform"></div>
              <p className="text-lg">Advanced analytics and reporting</p>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
              <p className="text-lg">Secure and scalable infrastructure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-sm"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-1">Enterprise ERP</h1>
            <p className="text-slate-300">Business Management System</p>
          </div>

          {/* Login Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-slate-300">Sign in to your account</p>
            </div>

            <div className="space-y-6">
              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 bg-white/10 border-white/20 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="text-slate-300 text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                style={{ backgroundColor: 'rgb(60,89,137)' }}
                className="w-full py-4 px-6 rounded-xl text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-center text-slate-400 text-sm">
                Don't have an account?{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  Contact Administrator
                </a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Enterprise ERP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}