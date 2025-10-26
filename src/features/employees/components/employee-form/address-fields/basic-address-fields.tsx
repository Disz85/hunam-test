import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error/error-message';
import { FormField } from '@/components/ui/form/form-field';
import { FormInput } from '@/components/ui/form/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type BasicAddressFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Basic address fields component (country, zip, city)
 */
export const BasicAddressFields = ({
  register,
  errors,
}: BasicAddressFieldsProps) => (
  <>
    <FormField label="Country" required colSpan={3}>
      <FormInput autoComplete="country" {...register('country')} />
      {errors.country?.message && (
        <ErrorMessage message={errors.country.message} />
      )}
    </FormField>

    <FormField label="ZIP Code" required colSpan={3}>
      <FormInput autoComplete="postal-code" {...register('zipCode')} />
      {errors.zipCode?.message && (
        <ErrorMessage message={errors.zipCode.message} />
      )}
    </FormField>

    <FormField label="City" required colSpan={3}>
      <FormInput autoComplete="address-level2" {...register('city')} />
      {errors.city?.message && <ErrorMessage message={errors.city.message} />}
    </FormField>
  </>
);
