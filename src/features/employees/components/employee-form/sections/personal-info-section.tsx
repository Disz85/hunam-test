import { UserIcon } from '@heroicons/react/24/outline';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('common');

  return (
    <Card>
      <FormSection
        title={t('sections.personalInformation')}
        description={t('sections.personalInformationDesc')}
        icon={UserIcon}
      >
        <NameFields register={register} errors={errors} />
        <BirthFields register={register} errors={errors} />
        <MothersNameFields register={register} errors={errors} />
        <EmailField register={register} errors={errors} />
        <ContactAndDetailsFields register={register} errors={errors} />
      </FormSection>
    </Card>
  );
};
