'use client';
import { QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

export const QueryClientProvider = ({ children }) => {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
};
