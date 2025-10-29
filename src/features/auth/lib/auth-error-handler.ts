/**
 * Authentication lib module
 *
 * @module features/auth/lib/auth-error-handler
 */

import { AxiosError } from 'axios';

/**
 * Callback function type for handling authentication errors
 */
type AuthErrorCallback = () => void;

/**
 * Global authentication error callback
 *
 * Injected via dependency injection during app initialization to avoid circular dependencies.
 * Set once during app initialization.
 */
let authErrorCallback: AuthErrorCallback | null = null;

/**
 * Set the global authentication error handler
 *
 * Should be called once during app initialization to inject the router
 * dependency without creating circular dependencies between modules.
 *
 * @param {AuthErrorCallback} callback - Function to call when a 401 error occurs
 *
 * @example
 * ```typescript
 * import { setAuthErrorHandler } from '@/features/auth/lib/auth-error-handler';
 *
 * setAuthErrorHandler(() => {
 *   queryClient.removeQueries({ queryKey: ['auth'] });
 *   router.navigate({ to: '/login' });
 * });
 * ```
 */
export const setAuthErrorHandler = (callback: AuthErrorCallback): void => {
  authErrorCallback = callback;
};

/**
 * Handle authentication errors (401 Unauthorized)
 *
 * Used by React Query's QueryCache and MutationCache to centralize
 * authentication error handling across the application.
 *
 * @param {unknown} error - Error object from React Query
 *
 * @example
 * ```typescript
 * import { handleAuthError } from '@/features/auth/lib/auth-error-handler';
 *
 * // Used in query client config
 * const queryClient = new QueryClient({
 *   queryCache: new QueryCache({
 *     onError: handleAuthError,
 *   }),
 * });
 * ```
 */
export const handleAuthError = (error: unknown): void => {
  if (!(error instanceof AxiosError)) {
    return;
  }

  if (error.response?.status === 401) {
    authErrorCallback?.();
  }
};
