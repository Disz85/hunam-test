import { RouterProvider } from '@tanstack/react-router';

import { router } from './config/router-config';
import { AuthProvider } from './features/auth/providers/auth-provider';
import { QueryProvider } from './providers/query-provider';

/**
 * Main App component
 *
 * Combines all providers and router configuration
 */
export function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryProvider>
  );
}
