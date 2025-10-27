import type { FieldErrors, UseFormRegister } from 'react-hook-form';

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
}: ContactAndDetailsFieldsProps) => (
  <>
    <FormField label="Phone Number" required colSpan={3}>
      <FormMaskedInput
        maskType="phone"
        type="tel"
        autoComplete="tel"
        placeholder="e.g. +36 20 123 4567"
        {...register('phone')}
      />
      {errors.phone?.message && <ErrorMessage message={errors.phone.message} />}
    </FormField>

    <FormField label="Sex" required colSpan={3}>
      <FormSelect
        options={SexLabels}
        placeholder="Select sex"
        {...register('sex', { valueAsNumber: true })}
      />
      {errors.sex?.message && <ErrorMessage message={errors.sex.message} />}
    </FormField>

    <FormField label="Education Level" required colSpan={3}>
      <FormSelect
        options={EducationLabels}
        placeholder="Select education level"
        {...register('education', { valueAsNumber: true })}
      />
      {errors.education?.message && (
        <ErrorMessage message={errors.education.message} />
      )}
    </FormField>
  </>
);
