import Footer from "../components/Footer";
import Header from "../components/Header.jsx";
import React from 'react';

export default function Login() {
  return (
    <div className="bg-[#3A3A3A] h-screen flex flex-col text-white overflow-hidden">
      {/* Header */}
      <Header />    

      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label 
                htmlFor="email" 
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>
            <div className="mb-6">
              <label 
                htmlFor="password" 
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
