import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { authService } from '@/api';
import { ApiError, TokenStorage } from '@/lib';

import type { LoginFormData } from '../schemas/login-schema';

/**
 * Login mutation hook
 *
 * Handles user authentication with HttpOnly cookie-based auth
 */
export const useLoginMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginFormData) => authService.login(data),

    onSuccess: response => {
      TokenStorage.setAuthenticated();
      queryClient.setQueryData(['auth', 'currentUser'], response);
      void navigate({ to: '/employees' });
    },

    onError: error => {
      console.error('Login failed:', ApiError.getMessage(error));
    },
  });
};
