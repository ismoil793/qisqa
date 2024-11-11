import React from 'react';

const CommonButton = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded bg-opacity-20 bg-black flex items-center justify-center ${className}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
