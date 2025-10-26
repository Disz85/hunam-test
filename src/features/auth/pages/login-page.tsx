import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';

import { ErrorAlert } from '@/components/ui/error/error-alert';
import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormButton } from '@/components/ui/form/form-button';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';
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
    <main className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Employee Management
        </h1>
        <p className="mt-2 text-lg/8 text-gray-600">Sign in to your account</p>
      </header>

      <section className="mx-auto mt-16 max-w-xl sm:mt-20">
        <form
          onSubmit={e => {
            void handleSubmit(onSubmit)(e);
          }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <FormField label="Username" required>
              <FormInput
                type="text"
                autoComplete="username"
                hasError={errors.username !== undefined}
                aria-describedby={
                  errors.username !== undefined ? 'username-error' : undefined
                }
                {...register('username', {
                  onChange: () => {
                    if (error !== null) {
                      clearError();
                    }
                  },
                })}
              />
              {errors.username && (
                <ErrorMessage
                  id="username-error"
                  message={errors.username.message || 'Username is required'}
                />
              )}
            </FormField>

            <FormField label="Password" required>
              <FormInput
                type="password"
                autoComplete="current-password"
                hasError={errors.password !== undefined}
                aria-describedby={
                  errors.password !== undefined ? 'password-error' : undefined
                }
                {...register('password', {
                  onChange: () => {
                    if (error !== null) {
                      clearError();
                    }
                  },
                })}
              />
              {errors.password && (
                <ErrorMessage
                  id="password-error"
                  message={errors.password.message || 'Password is required'}
                />
              )}
            </FormField>

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
      </section>
    </main>
  );
};
