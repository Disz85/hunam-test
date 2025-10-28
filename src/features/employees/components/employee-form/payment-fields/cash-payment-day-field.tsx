import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
}: CashPaymentDayFieldProps) => {
  const { t } = useTranslation('common');

  return (
    <FormField label={t('fields.cashPaymentDay')} required colSpan={3}>
      <FormInput
        type="number"
        min="1"
        max="31"
        placeholder="e.g. 15"
        {...register('cashPaymentDay')}
      />
      <p className="mt-1 text-xs text-gray-500">
        {t('fields.cashPaymentDayDesc')}
      </p>
      {errors.cashPaymentDay?.message && (
        <ErrorMessage message={errors.cashPaymentDay.message} />
      )}
    </FormField>
  );
};
