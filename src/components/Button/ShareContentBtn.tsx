'use client';
import React from 'react';
import CommonButton from '@/components/Button/CommonButton';
import useTranslation from "@/hooks/useTranslation";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const ShareContentBtn = ({ title, text, url }) => {
  const {translate} = useTranslation();

  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url
        });
        console.log('Content shared successfully!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  if (!isMobile) {
    return null;
  }

  return <CommonButton text={translate('footer.share-link')} onClick={shareContent} />;
};

export default ShareContentBtn;
