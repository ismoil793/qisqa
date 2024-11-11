'use client';

import React, { useState } from 'react';
import CommonInput from '@/components/Input/Input';
import CommonButton from '@/components/Button/CommonButton';

const CreatePage = () => {
  const [address, setAddress] = useState('');

  const handleAddressChange = e => {
    setAddress(e.target.value);
  };

  const handleNextButtonClick = () => {
    if(address?.trim()?.length) {

    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="mb-32">
        <h3>Type an address for you link</h3>
        <div className="flex items-center">
          <span className="text-blue-600 font-bold">qisqa.uz/</span>
          <CommonInput
            value={address}
            onChange={handleAddressChange}
            placeholder="Link address"
            className="bg-none text-black bg-opacity-0"
          />
        </div>
        <div>
          <CommonButton onClick={handleNextButtonClick} text="Next" className="w-full mt-5" />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
