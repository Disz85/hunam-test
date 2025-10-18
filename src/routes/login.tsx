import { createFileRoute, redirect } from '@tanstack/react-router';

import { LoginPage } from '@/features/auth/pages/login-page';
import { TokenStorage } from '@/lib/token-storage';

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
