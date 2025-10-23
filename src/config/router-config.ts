import { createRouter } from '@tanstack/react-router';

import { routeTree } from '../route-tree.gen';
import { queryClient } from './query-client-config';

/**
 * Router configuration
 *
 * Centralized router setup with context and preload settings
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
