import { useFormContext } from 'react-hook-form';

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
    <fieldset className="col-span-full">
      <legend className="text-base font-semibold leading-7 text-gray-900">
        Payment Information
      </legend>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Salary and payment method details.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        <PaymentMethodField register={register} errors={errors} />
        <SalaryField register={register} errors={errors} />
        <ConditionalPaymentFields
          register={register}
          errors={errors}
          paymentMethod={paymentMethod}
        />
      </div>
    </fieldset>
  );
};
