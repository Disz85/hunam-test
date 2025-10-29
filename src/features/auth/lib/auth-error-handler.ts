import { AxiosError } from 'axios';

/**
 * Callback function type for handling authentication errors
 */
type AuthErrorCallback = () => void;

/**
 * Global authentication error callback (injected via dependency injection)
 * Set once during app initialization to avoid circular dependencies
 */
let authErrorCallback: AuthErrorCallback | null = null;

/**
 * Set the global authentication error handler
 *
 * Should be called once during app initialization to inject the router
 * dependency without creating circular dependencies between modules.
 *
 * @param callback - Function to call when a 401 error occurs
 *
 * @example
 * ```ts
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
 * @param error - Error object from React Query
 */
export const handleAuthError = (error: unknown): void => {
  if (!(error instanceof AxiosError)) {
    return;
  }

  if (error.response?.status === 401) {
    authErrorCallback?.();
  }
};
