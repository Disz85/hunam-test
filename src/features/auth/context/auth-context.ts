/**
 * Authentication context module
 *
 * @module features/auth/context/auth-context
 */

import { createContext } from 'react';

import type { AuthState } from '../domain/types/auth-state';

/**
 * Authentication context
 *
 * React context for sharing authentication state across the application.
 * Contains current user data, loading state, and authentication methods.
 *
 * @example
 * ```tsx
 * import { AuthContext } from '@/features/auth/context/auth-context';
 * import { AuthProvider } from '@/features/auth/providers/auth-provider';
 *
 * // Wrap your app with AuthProvider to provide context
 * <AuthProvider>
 *   <App />
 * </AuthProvider>
 * ```
 */
export const AuthContext = createContext<AuthState | null>(null);
