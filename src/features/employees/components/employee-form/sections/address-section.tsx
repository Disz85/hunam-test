import { useFormContext } from 'react-hook-form';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';
import { AdministrativeFields } from '../address-fields/administrative-fields';
import { BasicAddressFields } from '../address-fields/basic-address-fields';
import { BuildingDetailsFields } from '../address-fields/building-details-fields';

/**
 * Address information section of the employee form
 */
export const AddressSection = () => {
  const { register, formState } = useFormContext<CreateEmployeeFormData>();
  const { errors } = formState;
  return (
    <fieldset className="col-span-full">
      <legend className="text-base font-semibold leading-7 text-gray-900">
        Address Information
      </legend>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Complete address details for the employee.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        <BasicAddressFields register={register} errors={errors} />
        <AdministrativeFields register={register} errors={errors} />
        <BuildingDetailsFields register={register} errors={errors} />
      </div>
    </fieldset>
  );
};
