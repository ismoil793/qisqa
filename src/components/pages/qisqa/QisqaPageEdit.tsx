'use client';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import LinkButton from '@/components/Button/LinkButton';
import { useSession } from 'next-auth/react';

const QisqaPageEdit = () => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <LinkButton className="absolute top-8 left-10" href="/profile">
      <span className="mr-3">Edit</span> <FiEdit />
    </LinkButton>
  );
};

export default QisqaPageEdit;
