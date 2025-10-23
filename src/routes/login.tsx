import { createFileRoute } from '@tanstack/react-router';

import { LoginPage } from '@/features/auth/pages/login-page';

/**
 * Login route - public route for authentication
 *
 * For HttpOnly cookie auth
 * If user is already authenticated, the backend will handle it.
 */
export const Route = createFileRoute('/login')({
  component: LoginPage,
});
