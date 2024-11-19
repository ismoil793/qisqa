'use client';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import LinkButton from '@/components/Button/LinkButton';
import { useSession } from 'next-auth/react';
import useTranslation from '@/hooks/useTranslation';

const QisqaPageEdit = () => {
  const { data: session } = useSession();
  const { translate } = useTranslation();

  if (!session) {
    return null;
  }

  return (
    <LinkButton className="absolute top-8 left-10" href="/profile">
      <span className="mr-3">{translate('navigation.edit')}</span> <FiEdit />
    </LinkButton>
  );
};

export default QisqaPageEdit;
