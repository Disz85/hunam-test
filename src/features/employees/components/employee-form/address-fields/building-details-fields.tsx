import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type BuildingDetailsFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Building details fields component (house number, building, staircase, floor, door)
 */
export const BuildingDetailsFields = ({
  register,
  errors,
}: BuildingDetailsFieldsProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <FormField label={t('fields.houseNumber')} required colSpan={2}>
        <FormInput {...register('houseNumber')} />
        {errors.houseNumber?.message && (
          <ErrorMessage message={errors.houseNumber.message} />
        )}
      </FormField>

      <FormField label={t('fields.building')} colSpan={2}>
        <FormInput {...register('building')} />
        {errors.building?.message && (
          <ErrorMessage message={errors.building.message} />
        )}
      </FormField>

      <FormField label={t('fields.staircase')} colSpan={2}>
        <FormInput {...register('staircase')} />
        {errors.staircase?.message && (
          <ErrorMessage message={errors.staircase.message} />
        )}
      </FormField>

      <FormField label={t('fields.floor')} colSpan={2}>
        <FormInput {...register('floor')} />
        {errors.floor?.message && (
          <ErrorMessage message={errors.floor.message} />
        )}
      </FormField>

      <FormField label={t('fields.door')} colSpan={2}>
        <FormInput {...register('door')} />
        {errors.door?.message && <ErrorMessage message={errors.door.message} />}
      </FormField>
    </>
  );
};
