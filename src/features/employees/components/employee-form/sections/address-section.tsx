import { MapPinIcon } from '@heroicons/react/24/outline';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Card } from '@/components/ui/card/card';
import { FormSection } from '@/components/ui/form/form-section';

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
  const { t } = useTranslation('common');

  return (
    <Card>
      <FormSection
        title={t('sections.addressInformation')}
        description={t('sections.addressInformationDesc')}
        icon={MapPinIcon}
      >
        <BasicAddressFields register={register} errors={errors} />
        <AdministrativeFields register={register} errors={errors} />
        <BuildingDetailsFields register={register} errors={errors} />
      </FormSection>
    </Card>
  );
};
