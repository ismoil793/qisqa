'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

const NextAuthSessionProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProvider;
