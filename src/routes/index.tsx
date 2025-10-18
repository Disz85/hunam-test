import { createFileRoute, redirect } from '@tanstack/react-router';

import { TokenStorage } from '@/lib/token-storage';

/**
 * Index route - redirects based on authentication status
 */
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    if (TokenStorage.isAuthenticated()) {
      throw redirect({ to: '/employees' });
    }
    throw redirect({ to: '/login' });
  },
});
