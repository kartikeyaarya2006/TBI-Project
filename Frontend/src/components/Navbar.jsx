import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">StaySense</span>
          </div>
          <div className="flex space-x-1 font-semibold items-center">
            <a href="/" className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-4 py-2.5 rounded-xl transition-all text-sm">Home</a>
            <a href="/dashboard" className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-4 py-2.5 rounded-xl transition-all text-sm">Dashboard</a>
            <a href="/about" className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-4 py-2.5 rounded-xl transition-all text-sm">About</a>
            <a href="/login" className="bg-indigo-600 text-white hover:bg-indigo-700 ml-4 px-5 py-2.5 rounded-xl transition-all text-sm shadow-sm shadow-indigo-100">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}