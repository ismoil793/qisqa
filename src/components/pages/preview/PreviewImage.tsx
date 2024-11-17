import React from 'react';
import toast from 'react-hot-toast';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const PreviewImage = ({ logoFile, setLogoFile, isFormSaving }) => {
  const handleFileChange = e => {
    const file = e.target.files[0];

    if (file.size > MAX_FILE_SIZE) {
      toast.error('File size cannot exceed 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      // @ts-ignore
      // const base64 = reader.result?.split(',')[1];
      setLogoFile({
        url: reader.result,
        base64: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex my-4 items-center">
      <div className="shrink-0">
        <img
          className="h-16 w-16 object-cover rounded-full border"
          src={logoFile.url || '/qisqa.png'}
          alt="Current logo"
        />
      </div>
      <label className="block ml-4">
        <span className="sr-only">Choose logo</span>
        <input
          type="file"
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-gray-200"
          onChange={handleFileChange}
          accept=".png,.jpg"
          disabled={isFormSaving}
        />
      </label>
    </div>
  );
};

export default PreviewImage;
