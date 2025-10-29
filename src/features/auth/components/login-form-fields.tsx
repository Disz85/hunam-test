/**
 * Authentication components module
 *
 * @module features/auth/components/login-form-fields
 */

import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { LoginCredentials } from '../domain/types/auth-state';

/**
 * Login form fields component props
 */
type LoginFormFieldsProps = {
  /** React Hook Form register function */
  register: UseFormRegister<LoginCredentials>;
  /** Form validation errors */
  errors: FieldErrors<LoginCredentials>;
  /** Global form error message */
  error: string | null;
  /** Function to clear global error */
  clearError: () => void;
};

/**
 * Login form fields component
 *
 * Renders username and password input fields with error handling.
 * Automatically clears global errors when user starts typing.
 *
 * @param {LoginFormFieldsProps} props - Component props
 *
 * @example
 * ```tsx
 * import { LoginFormFields } from '@/features/auth/components/login-form-fields';
 *
 * <LoginFormFields
 *   register={register}
 *   errors={errors}
 *   error={error}
 *   clearError={clearError}
 * />
 * ```
 */
export const LoginFormFields = ({
  register,
  errors,
  error,
  clearError,
}: LoginFormFieldsProps) => {
  const { t: tAuth } = useTranslation('auth');
  const { t: tErrors } = useTranslation('errors');

  const handleInputChange = () => {
    if (error !== null) {
      clearError();
    }
  };

  return (
    <>
      <FormField label={tAuth('username')} required>
        <FormInput
          type="text"
          autoComplete="username"
          hasError={errors.username !== undefined}
          aria-describedby={
            errors.username !== undefined ? 'username-error' : undefined
          }
          {...register('username', {
            onChange: handleInputChange,
          })}
        />
        {errors.username && (
          <ErrorMessage
            id="username-error"
            message={errors.username.message || tErrors('required')}
          />
        )}
      </FormField>

      <FormField label={tAuth('password')} required>
        <FormInput
          type="password"
          autoComplete="current-password"
          hasError={errors.password !== undefined}
          aria-describedby={
            errors.password !== undefined ? 'password-error' : undefined
          }
          {...register('password', {
            onChange: handleInputChange,
          })}
        />
        {errors.password && (
          <ErrorMessage
            id="password-error"
            message={errors.password.message || tErrors('required')}
          />
        )}
      </FormField>
    </>
  );
};
