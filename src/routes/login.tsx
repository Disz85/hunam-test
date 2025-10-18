import { createFileRoute, redirect } from '@tanstack/react-router';

import { authService } from '@/api';
import { LoginPage } from '@/features/auth/pages/login-page';
import { RouterHelpers } from '@/lib';

const AUTH_CACHE_TIME = 5 * 60 * 1000;

/**
 * Login route - public route for authentication
 *
 * Redirects to /employees if user is already authenticated.
 * Uses React Query cache for fast checks.
 */
export const Route = createFileRoute('/login')({
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
      // Not authenticated, allow access to login page
    }
  },
  component: LoginPage,
});
