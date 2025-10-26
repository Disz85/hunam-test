import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type AdministrativeFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Administrative area fields component
 */
export const AdministrativeFields = ({
  register,
  errors,
}: AdministrativeFieldsProps) => (
  <>
    <FormField label="Administrative Area" colSpan={3}>
      <FormInput {...register('administrativeArea')} />
      {errors.administrativeArea?.message && (
        <ErrorMessage message={errors.administrativeArea.message} />
      )}
    </FormField>

    <FormField label="Administrative Area Type" colSpan={3}>
      <FormInput {...register('administrativeAreaType')} />
      {errors.administrativeAreaType?.message && (
        <ErrorMessage message={errors.administrativeAreaType.message} />
      )}
    </FormField>

    <FormField label="Parcel Number" colSpan={3}>
      <FormInput {...register('parcelNumber')} />
      {errors.parcelNumber?.message && (
        <ErrorMessage message={errors.parcelNumber.message} />
      )}
    </FormField>
  </>
);
