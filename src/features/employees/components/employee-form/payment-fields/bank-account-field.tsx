import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

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
  <div className="sm:col-span-6">
    <FormField label="Bank Account Number" required>
      <FormInput
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
  </div>
);
