'use client';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import LinkButton from '@/components/Button/LinkButton';
import { useSession } from 'next-auth/react';
import useTranslation from '@/hooks/useTranslation';
import { useQuery } from '@tanstack/react-query';
import { QUERY_CLIENT_KEYS } from '@/components/Providers/QueryClientProvider/queryClient';
import axios from 'axios';

const QisqaPageEdit = ({ currentPage }) => {
  const { data: session } = useSession();
  const { translate } = useTranslation();

  const {
    data: profileData,
    isLoading,
    isFetching
  } = useQuery({
    queryKey: [QUERY_CLIENT_KEYS.GET_PROFILE],
    queryFn: async () => {
      const res = await axios.get('/api/profile');
      return res.data.data;
    },
    refetchOnWindowFocus: false
  });
  const loggedInUserPageData = profileData?.page?.length > 0 ? profileData.page[0] : {};

  if (!session || loggedInUserPageData?.path !== currentPage) {
    return null;
  }

  return (
    <LinkButton className="absolute top-8 left-10" href="/profile">
      <span className="mr-3">{translate('navigation.edit')}</span> <FiEdit />
    </LinkButton>
  );
};

export default QisqaPageEdit;
