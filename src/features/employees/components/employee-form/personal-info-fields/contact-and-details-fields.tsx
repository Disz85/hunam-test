import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormMaskedInput } from '@/components/ui/form/form-masked-input';
import { FormSelect } from '@/components/ui/form/form-select';

import { EducationLabels } from '../../../domain/enums/education-enum';
import { SexLabels } from '../../../domain/enums/sex-enum';
import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type ContactAndDetailsFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Contact and personal details fields component
 */
export const ContactAndDetailsFields = ({
  register,
  errors,
}: ContactAndDetailsFieldsProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <FormField label={t('fields.phoneNumber')} required colSpan={3}>
        <FormMaskedInput
          maskType="phone"
          type="tel"
          autoComplete="tel"
          placeholder={t('fields.phonePlaceholder')}
          {...register('phone')}
        />
        {errors.phone?.message && (
          <ErrorMessage message={errors.phone.message} />
        )}
      </FormField>

      <FormField label={t('fields.sex')} required colSpan={3}>
        <FormSelect
          options={SexLabels}
          placeholder={t('fields.sexPlaceholder')}
          {...register('sex', { valueAsNumber: true })}
        />
        {errors.sex?.message && <ErrorMessage message={errors.sex.message} />}
      </FormField>

      <FormField label={t('fields.education')} required colSpan={3}>
        <FormSelect
          options={EducationLabels}
          placeholder={t('fields.educationPlaceholder')}
          {...register('education', { valueAsNumber: true })}
        />
        {errors.education?.message && (
          <ErrorMessage message={errors.education.message} />
        )}
      </FormField>
    </>
  );
};
