import { RouterProvider } from '@tanstack/react-router';
import { useEffect } from 'react';

import { queryClient } from './config/query-client-config';
import { router } from './config/router-config';
import { setAuthErrorHandler } from './features/auth/lib/auth-error-handler';
import { AuthProvider } from './features/auth/providers/auth-provider';
import { QueryProvider } from './providers/query-provider';

/**
 * Main App component
 *
 * Combines all providers and router configuration.
 * Injects auth error handler to handle 401 responses globally.
 */
export function App() {
  useEffect(() => {
    // Setup global auth error handler (401 Unauthorized)
    setAuthErrorHandler(() => {
      // Clear auth cache
      queryClient.removeQueries({ queryKey: ['auth'] });

      // Redirect to login if not already there
      if (router.state.location.pathname !== '/login') {
        void router.navigate({ to: '/login' });
      }
    });
  }, []);

  return (
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryProvider>
  );
}
