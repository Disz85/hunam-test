/**
 * Authentication hooks module
 *
 * @module features/auth/hooks/use-auth
 */

import { useContext } from 'react';

import { AuthContext } from '../context/auth-context';
import type { AuthState } from '../domain/types/auth-state';

/**
 * Hook to use authentication context
 *
 * Provides access to authentication state and methods.
 * Must be used within an AuthProvider component.
 *
 * @returns {AuthState} Authentication state including user, methods, and loading state
 * @throws {Error} If used outside of AuthProvider
 *
 * @example
 * ```tsx
 * import { useAuth } from '@/features/auth/hooks/use-auth';
 *
 * function MyComponent() {
 *   const { user, isAuthenticated, login, logout } = useAuth();
 *
 *   if (!isAuthenticated) {
 *     return <LoginForm onLogin={login} />;
 *   }
 *
 *   return (
 *     <div>
 *       <p>Welcome, {user?.username}</p>
 *       <button onClick={logout}>Logout</button>
 *     </div>
 *   );
 * }
 * ```
 */
export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
