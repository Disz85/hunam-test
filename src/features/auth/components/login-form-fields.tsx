import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { LoginCredentials } from '../domain/types/auth-state';

type LoginFormFieldsProps = {
  register: UseFormRegister<LoginCredentials>;
  errors: FieldErrors<LoginCredentials>;
  error: Error | null;
  clearError: () => void;
};

/**
 * Login form fields component
 *
 * Renders username and password input fields with error handling
 */
export const LoginFormFields = ({
  register,
  errors,
  error,
  clearError,
}: LoginFormFieldsProps) => {
  const handleInputChange = () => {
    if (error !== null) {
      clearError();
    }
  };

  return (
    <>
      <FormField label="Username" required>
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
            onChange: handleInputChange,
          })}
        />
        {errors.password && (
          <ErrorMessage
            id="password-error"
            message={errors.password.message || 'Password is required'}
          />
        )}
      </FormField>
    </>
  );
};
