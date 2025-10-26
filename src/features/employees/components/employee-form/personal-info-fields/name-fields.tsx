import type { FieldErrors, UseFormRegister } from 'react-hook-form';

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
export const NameFields = ({ register, errors }: NameFieldsProps) => (
  <>
    <div className="sm:col-span-3">
      <FormField label="First Name" required>
        <FormInput autoComplete="given-name" {...register('firstName')} />
        {errors.firstName?.message && (
          <ErrorMessage message={errors.firstName.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-3">
      <FormField label="Last Name" required>
        <FormInput autoComplete="family-name" {...register('lastName')} />
        {errors.lastName?.message && (
          <ErrorMessage message={errors.lastName.message} />
        )}
      </FormField>
    </div>
  </>
);
