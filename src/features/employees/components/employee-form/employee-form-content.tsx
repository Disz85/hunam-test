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
  isLoading,
  isEdit,
}: EmployeeFormContentProps) => (
  <form onSubmit={onSubmit} className="space-y-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="space-y-8 lg:col-span-2">
        <PersonalInfoSection />
        <AddressSection />
      </div>
      <PaymentSection paymentMethod={paymentMethod} />
    </div>
    <EmployeeFormActions isLoading={isLoading} isEdit={isEdit} />
  </form>
);
