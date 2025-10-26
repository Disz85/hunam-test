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
    <div className="sm:col-span-3">
      <FormField label="Administrative Area">
        <FormInput {...register('administrativeArea')} />
        {errors.administrativeArea?.message && (
          <ErrorMessage message={errors.administrativeArea.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-3">
      <FormField label="Administrative Area Type">
        <FormInput {...register('administrativeAreaType')} />
        {errors.administrativeAreaType?.message && (
          <ErrorMessage message={errors.administrativeAreaType.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-3">
      <FormField label="Parcel Number">
        <FormInput {...register('parcelNumber')} />
        {errors.parcelNumber?.message && (
          <ErrorMessage message={errors.parcelNumber.message} />
        )}
      </FormField>
    </div>
  </>
);
