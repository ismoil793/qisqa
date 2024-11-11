'use client';
import React from 'react';
import PreviewForm from '@/components/pages/preview/PreviewForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageIllustration from '@/components/PageEffects/PageIllustration';

const PreviewPage = () => {
  return (
    <>
      <Header />
      <PageIllustration multiple />
      <section
        className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-20"
        style={
          {
            // backgroundColor: '#fff',
            // backgroundImage: 'linear-gradient(62deg, #fff 0%, #8EC5FC 100%)'
          }
        }
      >
        <PreviewForm />
      </section>
      <Footer />
    </>
  );
};

export default PreviewPage;
