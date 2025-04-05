import React from 'react';

interface FeedbackButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const NewFeedbackButton: React.FC<FeedbackButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      className={`w-64 py-4 font-bold rounded-full transition duration-300 
        ${disabled 
          ? "bg-purple-400 text-white cursor-not-allowed" 
          : "bg-purple-700 text-white hover:bg-purple-800"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default NewFeedbackButton;
