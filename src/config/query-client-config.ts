import { QueryClient } from '@tanstack/react-query';

/**
 * Default options for React Query
 */
const QUERY_DEFAULT_OPTIONS = {
  queries: {
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    retry: 1,
    refetchOnWindowFocus: false,
  },
  mutations: {
    retry: 0,
  },
} as const;

/**
 * Singleton instance of QueryClient
 *
 * Used throughout the application for data fetching and caching.
 * Can be imported directly in utility functions for manual cache manipulation.
 *
 * @example
 * ```ts
 * import { queryClient } from '@/config/query-client.config';
 *
 * // Manual cache invalidation
 * queryClient.invalidateQueries({ queryKey: ['employees'] });
 * ```
 */
export const queryClient: QueryClient = new QueryClient({
  defaultOptions: QUERY_DEFAULT_OPTIONS,
});
