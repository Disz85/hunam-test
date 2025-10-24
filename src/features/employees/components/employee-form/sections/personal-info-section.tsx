import { useFormContext } from 'react-hook-form';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';
import { BirthFields } from '../personal-info-fields/birth-fields';
import { ContactAndDetailsFields } from '../personal-info-fields/contact-and-details-fields';
import { EmailField } from '../personal-info-fields/email-field';
import { MothersNameFields } from '../personal-info-fields/mothers-name-fields';
import { NameFields } from '../personal-info-fields/name-fields';

/**
 * Personal information section of the employee form
 */
export const PersonalInfoSection = () => {
  const { register, formState } = useFormContext<CreateEmployeeFormData>();
  const { errors } = formState;

  return (
    <fieldset className="col-span-full">
      <legend className="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </legend>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Basic personal details about the employee.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        <EmailField register={register} errors={errors} />
        <NameFields register={register} errors={errors} />
        <BirthFields register={register} errors={errors} />
        <MothersNameFields register={register} errors={errors} />
        <ContactAndDetailsFields register={register} errors={errors} />
      </div>
    </fieldset>
  );
};
