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
  <div className="sm:col-span-6">
    <FormField label="Email Address" required>
      <FormInput type="email" autoComplete="email" {...register('email')} />
      {errors.email?.message && <ErrorMessage message={errors.email.message} />}
    </FormField>
  </div>
);
