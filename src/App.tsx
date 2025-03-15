import React from 'react';
import { IoSearch } from "react-icons/io5";
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      {/* Header */}
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          StudySpace at Concordia University
        </h1>
        <div className="flex items-center w-full max-w-lg bg-gray-700 rounded-lg p-2 mb-4">
          <IoSearch className="text-gray-400 text-xl mr-1.5" />
          <input
            type="text"
            placeholder="Search your location"
            className="flex-grow bg-transparent border-none text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="text-gray-400 hover:text-red-500 px-2">x</button>
        </div>
        <p className="text-lg text-gray-300">
          Search up the nearest available study spots based on your location!
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
