/**
 * Router helper functions module
 *
 * @module lib/router-helpers
 */

import type { QueryClient } from '@tanstack/react-query';

/**
 * Router context type
 *
 * Defines the structure of the router context passed to route components.
 */
type RouterContext = {
  /** Optional QueryClient instance from router context */
  queryClient?: unknown;
};

/**
 * Type guard to validate QueryClient at runtime
 *
 * Checks if a value is a valid QueryClient instance by verifying
 * the presence of the ensureQueryData method.
 *
 * @param {unknown} value - Value to check
 * @returns {value is QueryClient} True if value is a QueryClient
 */
const isQueryClient = (value: unknown): value is QueryClient => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  return (
    'ensureQueryData' in value && typeof value.ensureQueryData === 'function'
  );
};

/**
 * Safely extract QueryClient from router context
 *
 * Provides type-safe access to the QueryClient instance configured
 * in the router context. Used in route loaders and beforeLoad functions.
 *
 * @param {RouterContext} context - Router context object
 * @returns {QueryClient} The QueryClient instance
 * @throws {Error} If QueryClient is not available in router context
 *
 * @example
 * ```typescript
 * import { getQueryClient } from '@/lib/router-helpers';
 *
 * // In route loader
 * export const Route = new Route({
 *   beforeLoad: ({ context }) => {
 *     const queryClient = getQueryClient(context);
 *     await queryClient.ensureQueryData(['employees']);
 *   },
 * });
 * ```
 */
export const getQueryClient = (context: RouterContext): QueryClient => {
  if (isQueryClient(context.queryClient) === false) {
    throw new Error('QueryClient is not available in router context');
  }

  return context.queryClient;
};
