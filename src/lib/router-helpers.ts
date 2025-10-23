import type { QueryClient } from '@tanstack/react-query';

/**
 * Router context type
 */
type RouterContext = {
  queryClient?: unknown;
};

/**
 * Type guard to validate QueryClient at runtime
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
 * @throws {Error} If QueryClient is not available in router context
 */
export const getQueryClient = (context: RouterContext): QueryClient => {
  if (isQueryClient(context.queryClient) === false) {
    throw new Error('QueryClient is not available in router context');
  }

  return context.queryClient;
};
