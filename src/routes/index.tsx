import { createFileRoute, redirect } from '@tanstack/react-router';

/**
 * Index route - redirects to employees page
 *
 * Simple redirect to the main application area
 */
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/employees' });
  },
});
