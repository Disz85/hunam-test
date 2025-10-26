import { useFormContext } from 'react-hook-form';

import { Card } from '@/components/ui/card/card';
import { FormSection } from '@/components/ui/form/form-section';

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
    <Card className="col-span-full">
      <FormSection
        title="Personal Information"
        description="Basic personal details about the employee."
      >
        <EmailField register={register} errors={errors} />
        <NameFields register={register} errors={errors} />
        <BirthFields register={register} errors={errors} />
        <MothersNameFields register={register} errors={errors} />
        <ContactAndDetailsFields register={register} errors={errors} />
      </FormSection>
    </Card>
  );
};
