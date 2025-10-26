import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type SalaryFieldProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Salary input field component
 */
export const SalaryField = ({ register, errors }: SalaryFieldProps) => (
  <FormField label="Salary (HUF)" required colSpan="full">
    <FormInput
      type="number"
      min="200000"
      max="500000"
      step="1000"
      placeholder="e.g. 300000"
      {...register('salary', { valueAsNumber: true })}
    />
    <p className="mt-1 text-xs text-gray-500">
      Must be between 200,000 and 500,000 HUF
    </p>
    {errors.salary?.message && <ErrorMessage message={errors.salary.message} />}
  </FormField>
);
