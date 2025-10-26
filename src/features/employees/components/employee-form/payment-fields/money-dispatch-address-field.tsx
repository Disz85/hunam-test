import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormTextarea } from '@/components/ui/form/form-textarea';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type MoneyDispatchAddressFieldProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Money dispatch address field component for dispatch payments
 */
export const MoneyDispatchAddressField = ({
  register,
  errors,
}: MoneyDispatchAddressFieldProps) => (
  <FormField label="Money Dispatch Address" required colSpan="full">
    <FormTextarea
      rows={3}
      placeholder="Enter the complete address where salary should be sent..."
      {...register('moneyDispatchAddress')}
    />
    <p className="mt-1 text-xs text-gray-500">
      Complete address where the salary should be sent
    </p>
    {errors.moneyDispatchAddress?.message && (
      <ErrorMessage message={errors.moneyDispatchAddress.message} />
    )}
  </FormField>
);
