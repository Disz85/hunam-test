import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
  const { t: tAuth } = useTranslation('auth');
  const { t: tForm } = useTranslation('common');

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

        {error && <ErrorAlert message={tAuth('loginFailed')} />}
      </div>
      <div className="mt-10">
        <FormButton
          type="submit"
          isLoading={isLoading}
          loadingText={tAuth('signingIn')}
          aria-live="polite"
        >
          {tForm('form.submit')}
        </FormButton>
      </div>
    </form>
  );
};
