'use client';
import React, { useEffect, useState } from 'react';
import { getBrowserLocale } from '@/utils/translations';

const LanguageSwitcher = () => {
  const defaultLocale = localStorage.getItem('language-locale') || getBrowserLocale();
  const [language, setLanguage] = useState(defaultLocale);
  const [isSelectorOpen, setSelectorOpen] = useState(false);

  const handleLanguagePreferenceChange = lang => {
    localStorage.setItem('language-locale', lang.toLowerCase());
    setSelectorOpen(false);
    setLanguage(lang.toLowerCase());
    window.location.reload();
  };

  return (
    <div className="relative">
      <div>
        <button
          type="button"
          className="hover:bg-indigo-600 px-2 py-1 rounded bg-gray-800"
          onClick={() => setSelectorOpen(prev => !prev)}
        >
          {language.toUpperCase()}
        </button>
      </div>
      <div
        className={`absolute z-10 p-2 bg-gray-800 rounded mt-1 flex flex-col ${isSelectorOpen ? 'block' : 'hidden'}`}
        style={{top: '100%', left: -4}}
      >
        <button
          type="button"
          className="hover:bg-indigo-600 rounded p-1"
          onClick={() => handleLanguagePreferenceChange('en')}
        >
          EN
        </button>
        <button
          type="button"
          className="hover:bg-indigo-600 rounded p-1"
          onClick={() => handleLanguagePreferenceChange('uz')}
        >
          UZ
        </button>
        <button
          type="button"
          className="hover:bg-indigo-600 rounded p-1"
          onClick={() => handleLanguagePreferenceChange('ru')}
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
