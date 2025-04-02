import React from 'react';

interface FeedbackButtonProps {
  label: string;
  onClick: () => void;
}

const NewFeedbackButton: React.FC<FeedbackButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="w-64 py-4 bg-purple-700 text-white font-bold rounded-full hover:bg-purple-800 transition duration-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NewFeedbackButton;
