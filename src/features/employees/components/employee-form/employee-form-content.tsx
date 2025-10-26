import { EmployeeFormActions } from './employee-form-actions';
import { AddressSection } from './sections/address-section';
import { PaymentSection } from './sections/payment-section';
import { PersonalInfoSection } from './sections/personal-info-section';

/**
 * Props for the EmployeeFormContent component
 */
export type EmployeeFormContentProps = {
  paymentMethod: number | undefined;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isLoading: boolean;
  isEdit: boolean;
};

/**
 * EmployeeFormContent component
 *
 * Renders the form sections and handles form submission
 */
export const EmployeeFormContent = ({
  paymentMethod,
  onSubmit,
  onCancel,
  isLoading,
  isEdit,
}: EmployeeFormContentProps) => (
  <form onSubmit={onSubmit} className="col-span-full space-y-8">
    <PersonalInfoSection />
    <AddressSection />
    <PaymentSection paymentMethod={paymentMethod} />
    <EmployeeFormActions
      onCancel={onCancel}
      isLoading={isLoading}
      isEdit={isEdit}
    />
  </form>
);
