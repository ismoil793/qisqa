import React from 'react';

const CommonButton = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded bg-opacity-40 bg-black flex items-center justify-center ${className}`}
      type="button"
    >
      {text}
    </button>
  );
};

export default CommonButton;
