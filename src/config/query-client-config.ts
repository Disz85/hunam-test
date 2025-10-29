import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { handleAuthError } from '@/features/auth/lib/auth-error-handler';

/**
 * Singleton instance of QueryClient
 *
 * Configured with global error handlers for authentication errors.
 * Uses QueryCache and MutationCache listeners to centralize 401 handling.
 *
 * @example
 * ```ts
 * import { queryClient } from '@/config/query-client-config';
 *
 * // Manual cache invalidation
 * queryClient.invalidateQueries({ queryKey: ['employees'] });
 * ```
 */
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleAuthError,
  }),
  mutationCache: new MutationCache({
    onError: handleAuthError,
  }),
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: (failureCount: number, error: Error) => {
        // Don't retry on authentication errors
        if (error instanceof AxiosError && error.response?.status === 401) {
          return false;
        }
        return failureCount < 1;
      },
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});
