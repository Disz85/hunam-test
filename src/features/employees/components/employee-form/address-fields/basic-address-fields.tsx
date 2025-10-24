import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error-message';
import { FormField } from '@/components/ui/form-field';
import { FormInput } from '@/components/ui/form-input';

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
    <div className="sm:col-span-3">
      <FormField label="Country" required>
        <FormInput autoComplete="country" {...register('country')} />
        {errors.country?.message && (
          <ErrorMessage message={errors.country.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-3">
      <FormField label="ZIP Code" required>
        <FormInput autoComplete="postal-code" {...register('zipCode')} />
        {errors.zipCode?.message && (
          <ErrorMessage message={errors.zipCode.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-3">
      <FormField label="City" required>
        <FormInput autoComplete="address-level2" {...register('city')} />
        {errors.city?.message && <ErrorMessage message={errors.city.message} />}
      </FormField>
    </div>
  </>
);
