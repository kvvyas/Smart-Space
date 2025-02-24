import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header.jsx";

export default function AboutUs() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">About us</h1>
        <div className="text-3xl font-light uppercase bg-gray-600 rounded-lg h-48 w-48 flex items-center justify-center mb-6">
          PICTURE OF US
        </div>
        <p className="text-lg text-gray-300 text-center px-4">
          We are Concordia students blah blah
        </p>
      </main>

      <Footer />
    </div>
  );
}
