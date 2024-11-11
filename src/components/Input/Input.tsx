import React from 'react';

const COMMON_INPUT_CLASSNAMES = 'py-2 px-4 rounded outline-none border-none';

const CommonInput = ({ value, placeholder, onChange, className }) => {
  return (
    <input
      onChange={onChange}
      className={`${COMMON_INPUT_CLASSNAMES} ${className}`}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default CommonInput;
