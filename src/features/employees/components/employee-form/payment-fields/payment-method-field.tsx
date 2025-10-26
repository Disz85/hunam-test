import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormSelect } from '@/components/ui/form/form-select';

import { PaymentMethodLabels } from '../../../domain/enums/payment-method-enum';
import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type PaymentMethodFieldProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Payment method selection field component
 */
export const PaymentMethodField = ({
  register,
  errors,
}: PaymentMethodFieldProps) => (
  <FormField label="Payment Method" required colSpan="full">
    <FormSelect {...register('paymentMethod', { valueAsNumber: true })}>
      <option value="">Select payment method</option>
      {Object.entries(PaymentMethodLabels).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </FormSelect>
    {errors.paymentMethod?.message && (
      <ErrorMessage message={errors.paymentMethod.message} />
    )}
  </FormField>
);
