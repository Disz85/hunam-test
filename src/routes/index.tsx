/**
 * Routes module - Index route
 *
 * @module routes/index
 */

import { createFileRoute, redirect } from '@tanstack/react-router';

/**
 * Index route
 *
 * Redirects root path to login page.
 * For HttpOnly cookie auth, we don't need to check localStorage.
 * The protected routes will handle auth validation via API calls.
 */
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/login' });
  },
});
