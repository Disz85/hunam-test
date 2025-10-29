/**
 * Routes module - Root route
 *
 * @module routes/__root
 */

import { createRootRoute } from '@tanstack/react-router';

import { RootLayout } from '@/components/layouts/root-layout';
import { NotFoundPage } from '@/components/pages/not-found-page';

/**
 * Root route
 *
 * Parent route for all other routes in the application.
 * Provides the base layout structure and 404 page configuration.
 *
 * Features:
 * - RootLayout wrapper for consistent app structure
 * - NotFoundPage for 404 handling
 * - Router DevTools in development mode
 */
export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});
