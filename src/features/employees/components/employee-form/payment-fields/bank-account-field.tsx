import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormMaskedInput } from '@/components/ui/form/form-masked-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type BankAccountFieldProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Bank account number field component for transfer payments
 */
export const BankAccountField = ({
  register,
  errors,
}: BankAccountFieldProps) => (
  <FormField label="Bank Account Number" required colSpan="full">
    <FormMaskedInput
      maskType="bankAccount"
      placeholder="e.g. 12345678-12345678-12345678"
      {...register('bankAccountNumber')}
    />
    <p className="mt-1 text-xs text-gray-500">
      Required for bank transfer payments
    </p>
    {errors.bankAccountNumber?.message && (
      <ErrorMessage message={errors.bankAccountNumber.message} />
    )}
  </FormField>
);
