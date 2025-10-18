import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { authService } from '@/api';
import { AuthContext } from '@/contexts/auth-context';
import { ApiError } from '@/lib';

import type { AuthContextValue } from '../contexts/auth-context';
import type { LoginFormData } from '../features/auth';

const AUTH_CACHE_TIME = 5 * 60 * 1000;

/**
 * Auth provider component
 *
 * Provides authentication state and actions to the entire app
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Current user query
  const { data: user, isLoading } = useQuery({
    queryKey: ['auth', 'currentUser'],
    queryFn: () => authService.getCurrentUser(),
    staleTime: AUTH_CACHE_TIME,
    retry: false,
    // Don't run on mount if not authenticated
    enabled: false,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: (data: LoginFormData) => authService.login(data),
    onSuccess: response => {
      queryClient.setQueryData(['auth', 'currentUser'], response);
      void navigate({ to: '/employees' });
    },
    onError: error => {
      console.error('Login failed:', ApiError.getMessage(error));
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSettled: () => {
      queryClient.removeQueries({ queryKey: ['auth'] });
      void navigate({ to: '/login' });
    },
  });

  const value: AuthContextValue = {
    user: user?.[0],
    isLoading,
    isAuthenticated: !!user?.[0],
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoginPending: loginMutation.isPending,
    isLogoutPending: logoutMutation.isPending,
    loginError: loginMutation.error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
