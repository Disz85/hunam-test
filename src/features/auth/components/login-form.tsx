import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';

import { ErrorAlert } from '@/components/ui/error/error-alert';
import { FormButton } from '@/components/ui/form/form-button';

import type { LoginCredentials } from '../domain/types/auth-state';
import { useAuth } from '../hooks/use-auth';
import { loginSchema } from '../schemas/login-schema';
import { LoginFormFields } from './login-form-fields';

/**
 * Login form component
 *
 * Handles login form state, validation, and submission
 */
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
  });

  const { login, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await login(data);
      void navigate({ to: '/admin' });
    } catch (_error) {
      // Error handling is done in AuthProvider
    }
  };

  return (
    <form
      onSubmit={e => {
        void handleSubmit(onSubmit)(e);
      }}
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6">
        <LoginFormFields
          register={register}
          errors={errors}
          error={error}
          clearError={clearError}
        />

        {error && (
          <ErrorAlert message="Login failed. Please check your credentials and try again." />
        )}
      </div>
      <div className="mt-10">
        <FormButton
          type="submit"
          isLoading={isLoading}
          loadingText="Signing in..."
          aria-live="polite"
        >
          Sign in
        </FormButton>
      </div>
    </form>
  );
};
