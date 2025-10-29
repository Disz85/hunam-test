/**
 * Router configuration module
 *
 * @module config/router-config
 */

import { createRouter } from '@tanstack/react-router';

import { routeTree } from '../route-tree.gen';
import { queryClient } from './query-client-config';

/**
 * Router configuration
 *
 * Centralized router setup with context and preload settings.
 * Uses intent-based preloading for better UX (preloads on hover/focus).
 *
 * @example
 * ```typescript
 * import { router } from '@/config/router-config';
 *
 * // Navigate programmatically
 * await router.navigate({ to: '/employees' });
 * ```
 */
export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
});

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
