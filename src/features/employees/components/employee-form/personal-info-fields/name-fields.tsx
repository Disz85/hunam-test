import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type NameFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * First and last name fields component
 */
export const NameFields = ({ register, errors }: NameFieldsProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <FormField label={t('fields.firstName')} required colSpan={3}>
        <FormInput autoComplete="given-name" {...register('firstName')} />
        {errors.firstName?.message && (
          <ErrorMessage message={errors.firstName.message} />
        )}
      </FormField>

      <FormField label={t('fields.lastName')} required colSpan={3}>
        <FormInput autoComplete="family-name" {...register('lastName')} />
        {errors.lastName?.message && (
          <ErrorMessage message={errors.lastName.message} />
        )}
      </FormField>
    </>
  );
};
