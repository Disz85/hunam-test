import { BanknotesIcon } from '@heroicons/react/24/outline';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Card } from '@/components/ui/card/card';
import { FormSection } from '@/components/ui/form/form-section';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';
import { ConditionalPaymentFields } from '../payment-fields/conditional-payment-fields';
import { PaymentMethodField } from '../payment-fields/payment-method-field';
import { SalaryField } from '../payment-fields/salary-field';

type PaymentSectionProps = {
  paymentMethod?: number;
};

/**
 * Payment information section of the employee form
 *
 * Includes conditional fields based on PaymentMethod:
 * - Transfer: BankAccountNumber
 * - Cash: CashPaymentDay
 * - Dispatch: MoneyDispatchAddress
 */
export const PaymentSection = ({ paymentMethod }: PaymentSectionProps) => {
  const { register, formState } = useFormContext<CreateEmployeeFormData>();
  const { errors } = formState;
  const { t } = useTranslation('common');

  return (
    <Card className="h-fit">
      <FormSection
        title={t('sections.paymentInformation')}
        description={t('sections.paymentInformationDesc')}
        icon={BanknotesIcon}
      >
        <PaymentMethodField register={register} errors={errors} />
        <SalaryField register={register} errors={errors} />
        <ConditionalPaymentFields
          register={register}
          errors={errors}
          paymentMethod={paymentMethod}
        />
      </FormSection>
    </Card>
  );
};
