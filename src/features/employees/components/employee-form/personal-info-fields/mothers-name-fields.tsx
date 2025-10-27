import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type MothersNameFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Mother's name fields component
 */
export const MothersNameFields = ({
  register,
  errors,
}: MothersNameFieldsProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <FormField label={t('fields.mothersFirstName')} required colSpan={3}>
        <FormInput {...register('mothersFirstName')} />
        {errors.mothersFirstName?.message && (
          <ErrorMessage message={errors.mothersFirstName.message} />
        )}
      </FormField>

      <FormField label={t('fields.mothersLastName')} required colSpan={3}>
        <FormInput {...register('mothersLastName')} />
        {errors.mothersLastName?.message && (
          <ErrorMessage message={errors.mothersLastName.message} />
        )}
      </FormField>
    </>
  );
};
