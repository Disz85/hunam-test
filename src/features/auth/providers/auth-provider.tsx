import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { type ReactNode } from 'react';

import { authService } from '@/api';
import { ApiError } from '@/lib/api-error';

import { AuthContext } from '../context/auth-context';
import type { AuthState, LoginCredentials } from '../domain/types/auth-state';

/**
 * Cache configuration
 */
const AUTH_CACHE_TIME = 5 * 60 * 1000; // 5 minutes

/**
 * AuthProvider props
 */
type AuthProviderProps = {
  children: ReactNode;
};

/**
 * Authentication Provider
 *
 * Manages authentication state using React Query for data fetching
 * and provides centralized auth methods for the entire app.
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const queryClient = useQueryClient();

  // Fetch current user (disabled by default, triggered manually via checkAuth)
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['auth', 'currentUser'],
    queryFn: () => authService.getCurrentUser(),
    retry: false,
    staleTime: AUTH_CACHE_TIME,
    enabled: false, // Don't auto-fetch on mount
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      authService.login(credentials),
    onSuccess: userData => {
      queryClient.setQueryData(['auth', 'currentUser'], userData);
    },
    onError: error => {
      // This is not an error, just failed authentication
      if (import.meta.env.DEV) {
        console.warn('Authentication failed:', ApiError.getMessage(error));
      }
    },
  });

  // Logout mutation - clears all auth-related cache
  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSettled: () => {
      queryClient.removeQueries({ queryKey: ['auth'] });
    },
  });

  // Compose auth state from queries and mutations
  const authState: AuthState = {
    // User data
    user: user ?? null,
    currentUser: user?.[0] ?? null,

    // Loading state (either fetching user or login in progress)
    isLoading: isLoading || loginMutation.isPending,

    // Authentication check - user must exist and have data, no fetch errors
    isAuthenticated:
      user !== null && user !== undefined && user.length > 0 && error === null,

    // Error message from failed login
    error: loginMutation.error
      ? ApiError.getMessage(loginMutation.error)
      : null,

    // Auth methods
    login: async credentials => {
      await loginMutation.mutateAsync(credentials);
    },

    logout: async () => {
      await logoutMutation.mutateAsync();
    },

    checkAuth: async () => {
      await refetch();
    },

    clearError: () => {
      loginMutation.reset();
    },
  };

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
