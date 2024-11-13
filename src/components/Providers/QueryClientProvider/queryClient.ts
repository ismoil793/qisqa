import { QueryClient } from '@tanstack/react-query';

export const QUERY_CLIENT_KEYS = {
    GET_PROFILE: 'GET_PROFILE',
};



export const queryClient = new QueryClient();
