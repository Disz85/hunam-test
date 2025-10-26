import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type EmailFieldProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Email address field component
 */
export const EmailField = ({ register, errors }: EmailFieldProps) => (
  <FormField label="Email Address" required colSpan="full">
    <FormInput type="email" autoComplete="email" {...register('email')} />
    {errors.email?.message && <ErrorMessage message={errors.email.message} />}
  </FormField>
);
