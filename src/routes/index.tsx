import { createFileRoute, redirect } from '@tanstack/react-router';

import { authService } from '@/api';
import { RouterHelpers } from '@/lib';

const AUTH_CACHE_TIME = 5 * 60 * 1000;

/**
 * Index route - redirects based on authentication status
 *
 * Uses React Query cache to check authentication state.
 * If cached data exists (within staleTime), no API call is made.
 */
export const Route = createFileRoute('/')({
  beforeLoad: async ({ context }) => {
    const queryClient = RouterHelpers.getQueryClient(context);

    try {
      await queryClient.ensureQueryData({
        queryKey: ['auth', 'currentUser'],
        queryFn: () => authService.getCurrentUser(),
        staleTime: AUTH_CACHE_TIME,
      });
      throw redirect({ to: '/employees' });
    } catch {
      throw redirect({ to: '/login' });
    }
  },
});
