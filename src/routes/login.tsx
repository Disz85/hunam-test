import { createFileRoute, redirect } from '@tanstack/react-router';

import { LoginPage } from '@/features/auth/pages/login-page';
import { RouterHelpers } from '@/lib';

/**
 * Login route - public route for authentication
 *
 * Redirects to /employees if user is already authenticated.
 * Only checks cache - avoids unnecessary API call if coming from index redirect.
 */
export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    const queryClient = RouterHelpers.getQueryClient(context);

    const cachedAuth = queryClient.getQueryData(['auth', 'currentUser']);

    if (cachedAuth) {
      throw redirect({ to: '/employees' });
    }
  },
  component: LoginPage,
});
