import React from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import NewFeedbackButton from "./components/NewFeedbackButton";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col text-white">
      {/* Header */}
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          StudySpace at Concordia University <br /></h1>
          <Link to="/step1" state={{ campus: "SGW" }}>
        <NewFeedbackButton label="Sir Georges Williams campus" onClick={() => console.log("I am at SGW")} /></Link>
          <p><br /></p>
          <Link to="/step1" state={{ campus: "LOY" }}>
        <NewFeedbackButton label="Loyola campus" onClick={() => console.log("I am at Loyola")} /></Link>
          <br />Where are you studying today?
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;