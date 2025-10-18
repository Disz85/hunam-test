import { createFileRoute, redirect } from '@tanstack/react-router';

import { TokenStorage } from '@/lib/token-storage';

/**
 * Index route - redirects based on authentication status
 *
 * - Authenticated users → /employees
 * - Unauthenticated users → /login
 */
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    if (TokenStorage.hasToken()) {
      throw redirect({ to: '/employees' });
    }
    throw redirect({ to: '/login' });
  },
});
