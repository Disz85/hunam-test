import { createFileRoute } from '@tanstack/react-router';

import { LoginPage } from '@/features/auth/pages/login-page';

/**
 * Login route - public route for authentication
 *
 * No redirect logic - let the backend handle authentication
 */
export const Route = createFileRoute('/login')({
  component: LoginPage,
});
