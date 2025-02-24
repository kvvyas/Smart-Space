import React from 'react';

function FeedbackButton({ label, onClick }) {
  return (
    <button
      className="w-64 py-4 bg-purple-700 text-white font-bold rounded-full hover:bg-purple-800 transition duration-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default FeedbackButton;
