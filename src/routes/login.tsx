import { createFileRoute, redirect } from '@tanstack/react-router';

import { TokenStorage } from '@/lib/token-storage';
import { LoginPage } from '@/pages/login-page';

/**
 * Login route - public route for authentication
 */
export const Route = createFileRoute('/login')({
  beforeLoad: () => {
    if (TokenStorage.isAuthenticated()) {
      throw redirect({ to: '/employees' });
    }
  },
  component: LoginPage,
});
