import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';

import type { LoginCredentials } from '@/features/auth/domain/types/auth-state';
import { useAuth } from '@/features/auth/hooks/use-auth';
import { loginSchema } from '@/features/auth/schemas/login-schema';

/**
 * Login page component
 */
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
  });

  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await login(data);
      void navigate({ to: '/employees' });
    } catch (_error) {
      // Error handling is done in AuthProvider
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={e => {
          void handleSubmit(onSubmit)(e);
        }}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            autoComplete="username"
            {...register('username')}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {error && <div>{error}</div>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};
