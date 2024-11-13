'use client';
import React, { useState } from 'react';
import PreviewForm from '@/components/pages/preview/PreviewForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageIllustration from '@/components/PageEffects/PageIllustration';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { QUERY_CLIENT_KEYS } from '@/components/Providers/QueryClientProvider/queryClient';
import axios from 'axios';

const ProfilePage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      redirect('/signin?callbackUrl=/profile');
    }
  });

  const { data: profileData } = useQuery({
    queryKey: [QUERY_CLIENT_KEYS.GET_PROFILE],
    queryFn: async () => {
      const res = await axios.get('/api/profile');
      return res.data.data;
    }
  });

  const pageData = profileData?.page?.length > 0 ? profileData.page[0] : {}
  const linksData = profileData?.page?.length > 0 ? profileData.page[0].links : []

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
        <PreviewForm pageData={pageData} linksData={linksData} />
      </section>
      <Footer />
    </>
  );
};

export default ProfilePage;