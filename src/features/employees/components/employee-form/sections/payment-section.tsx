import { useFormContext } from 'react-hook-form';

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
  return (
    <Card className="col-span-full">
      <FormSection
        title="Payment Information"
        description="Salary and payment method details."
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
