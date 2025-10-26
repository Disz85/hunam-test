import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type BirthFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Birth date and place fields component
 */
export const BirthFields = ({ register, errors }: BirthFieldsProps) => (
  <>
    <FormField label="Date of Birth" required colSpan={3}>
      <FormInput type="date" {...register('dateOfBirth')} />
      {errors.dateOfBirth?.message && (
        <ErrorMessage message={errors.dateOfBirth.message} />
      )}
    </FormField>

    <FormField label="Place of Birth" required colSpan={3}>
      <FormInput {...register('placeOfBirth')} />
      {errors.placeOfBirth?.message && (
        <ErrorMessage message={errors.placeOfBirth.message} />
      )}
    </FormField>
  </>
);
