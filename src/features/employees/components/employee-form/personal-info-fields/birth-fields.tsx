import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error-message';
import { FormField } from '@/components/ui/form-field';
import { FormInput } from '@/components/ui/form-input';

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
    <div className="sm:col-span-3">
      <FormField label="Date of Birth" required>
        <FormInput type="date" {...register('dateOfBirth')} />
        {errors.dateOfBirth?.message && (
          <ErrorMessage message={errors.dateOfBirth.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-3">
      <FormField label="Place of Birth" required>
        <FormInput {...register('placeOfBirth')} />
        {errors.placeOfBirth?.message && (
          <ErrorMessage message={errors.placeOfBirth.message} />
        )}
      </FormField>
    </div>
  </>
);
