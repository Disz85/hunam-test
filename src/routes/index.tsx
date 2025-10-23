import { createFileRoute, redirect } from '@tanstack/react-router';

/**
 * Index route - redirects to login
 *
 * For HttpOnly cookie auth, we don't need to check localStorage.
 * The protected routes will handle auth validation via API calls.
 */
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/login' });
  },
});
