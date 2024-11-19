'use client';
import { useCallback, useEffect, useState } from 'react';
import { getBrowserLocale, UI_TRANSLATIONS } from '@/utils/translations';

const useTranslation = () => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const defaultLocale = localStorage.getItem('language-locale') || getBrowserLocale();

    setLocale(defaultLocale);
  }, []);

  const translate = useCallback(
    (translationText, param = '') => {
      const translationValue = UI_TRANSLATIONS[locale][translationText];

      if (!translationValue) return '';

      if (typeof translationValue === 'function') {
        return translationValue(param);
      }

      return translationValue;
    },
    [locale]
  );

  return {
    translate,
    locale
  };
};

export default useTranslation;
