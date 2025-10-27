import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
}: PaymentMethodFieldProps) => {
  const { t } = useTranslation('common');

  return (
    <FormField label={t('fields.paymentMethod')} required colSpan="full">
      <FormSelect
        options={PaymentMethodLabels}
        placeholder={t('formLabels.selectPaymentMethod')}
        {...register('paymentMethod', { valueAsNumber: true })}
      />
      {errors.paymentMethod?.message && (
        <ErrorMessage message={errors.paymentMethod.message} />
      )}
    </FormField>
  );
};
