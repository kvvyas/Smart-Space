import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      console.log("response recieved")
      
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess("Login successful!");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server error, please try again later.");
    }
  };

  return (
    <div className="bg-[#3A3A3A] h-screen flex flex-col text-white overflow-hidden">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition-colors">
              Login
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
