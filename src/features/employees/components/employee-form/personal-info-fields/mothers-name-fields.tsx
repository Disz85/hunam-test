import type { FieldErrors, UseFormRegister } from 'react-hook-form';

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
}: MothersNameFieldsProps) => (
  <>
    <div className="sm:col-span-3">
      <FormField label="Mother's First Name" required>
        <FormInput {...register('mothersFirstName')} />
        {errors.mothersFirstName?.message && (
          <ErrorMessage message={errors.mothersFirstName.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-3">
      <FormField label="Mother's Last Name" required>
        <FormInput {...register('mothersLastName')} />
        {errors.mothersLastName?.message && (
          <ErrorMessage message={errors.mothersLastName.message} />
        )}
      </FormField>
    </div>
  </>
);
