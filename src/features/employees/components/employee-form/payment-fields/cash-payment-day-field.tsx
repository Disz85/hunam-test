import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type CashPaymentDayFieldProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Cash payment day field component for cash payments
 */
export const CashPaymentDayField = ({
  register,
  errors,
}: CashPaymentDayFieldProps) => (
  <div className="sm:col-span-3">
    <FormField label="Cash Payment Day" required>
      <FormInput
        type="number"
        min="1"
        max="31"
        placeholder="e.g. 15"
        {...register('cashPaymentDay', { valueAsNumber: true })}
      />
      <p className="mt-1 text-xs text-gray-500">
        Day of the month (1-31) when cash payment is made
      </p>
      {errors.cashPaymentDay?.message && (
        <ErrorMessage message={errors.cashPaymentDay.message} />
      )}
    </FormField>
  </div>
);
