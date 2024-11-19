'use client';
import { useCallback } from 'react';
import { getBrowserLocale, UI_TRANSLATIONS } from '@/utils/translations';

const useTranslation = () => {
  let locale = localStorage.getItem('language-locale');

  if (!locale) {
    locale = getBrowserLocale();
  }

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
