import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
export const SalaryField = ({ register, errors }: SalaryFieldProps) => {
  const { t } = useTranslation('common');

  return (
    <FormField label={t('fields.salary')} required colSpan="full">
      <FormInput
        type="number"
        min="200000"
        max="500000"
        step="1000"
        placeholder="e.g. 300000"
        {...register('salary')}
      />
      <p className="mt-1 text-xs text-gray-500">{t('fields.salaryDesc')}</p>
      {errors.salary?.message && (
        <ErrorMessage message={errors.salary.message} />
      )}
    </FormField>
  );
};
