import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { PaymentMethod } from '../../../domain/enums/payment-method-enum';
import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';
import { BankAccountField } from './bank-account-field';
import { CashPaymentDayField } from './cash-payment-day-field';
import { MoneyDispatchAddressField } from './money-dispatch-address-field';

type ConditionalPaymentFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
  paymentMethod?: number;
};

/**
 * Conditional payment fields component
 *
 * Renders different fields based on the selected payment method:
 * - Transfer: BankAccountField
 * - Cash: CashPaymentDayField
 * - Dispatch: MoneyDispatchAddressField
 */
export const ConditionalPaymentFields = ({
  register,
  errors,
  paymentMethod,
}: ConditionalPaymentFieldsProps) => {
  return (
    <>
      {paymentMethod === PaymentMethod.Transfer && (
        <BankAccountField register={register} errors={errors} />
      )}
      {paymentMethod === PaymentMethod.Cash && (
        <CashPaymentDayField register={register} errors={errors} />
      )}
      {paymentMethod === PaymentMethod.Dispatch && (
        <MoneyDispatchAddressField register={register} errors={errors} />
      )}
    </>
  );
};
