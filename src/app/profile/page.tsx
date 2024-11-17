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
import PacmanLoader from 'react-spinners/PacmanLoader';

const ProfilePage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      redirect('/signin?callbackUrl=/profile');
    }
  });

  const {
    data: profileData,
    isLoading,
    isFetching
  } = useQuery({
    queryKey: [QUERY_CLIENT_KEYS.GET_PROFILE],
    queryFn: async () => {
      const res = await axios.get('/api/profile');
      return res.data.data;
    }
  });

  const isLoadingProfile = isLoading || isFetching;

  const pageData = profileData?.page?.length > 0 ? profileData.page[0] : {};
  const linksData = profileData?.page?.length > 0 ? profileData.page[0].links : [];

  return (
    <>
      <Header />
      <section className="relative overflow-hidden">
        <PageIllustration />
        {isLoadingProfile && (
          <div className="absolute w-full h-screen flex items-center justify-center z-50">
            <div className="mb-60">
              <PacmanLoader color="#fff" />
            </div>
          </div>
        )}
        <div
          className={`mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-20 ${isLoadingProfile ? 'blur' : ''}`}
        >
          <PreviewForm pageData={pageData} linksData={linksData} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfilePage;
