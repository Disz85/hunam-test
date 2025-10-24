import { createRootRoute } from '@tanstack/react-router';

import { RootLayout } from '@/components/layouts/root-layout';
import { NotFoundPage } from '@/components/pages/not-found-page';

/**
 * Root route - parent of all routes
 *
 * Provides the base layout structure for the entire application.
 * Includes Router DevTools in development mode.
 */
export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});
