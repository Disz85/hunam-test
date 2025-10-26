import { AdminPageLayout } from '@/components/layouts/admin-page-layout';
import { BackButton } from '@/components/ui/button/back-button';

import { EmployeeForm } from '../components/employee-form/employee-form';

/**
 * Employee create page component
 */
export const EmployeeCreatePage = () => {
  return (
    <AdminPageLayout
      title="Create New Employee"
      description="Fill in the employee information below to create a new employee."
      header={<BackButton />}
    >
      <EmployeeForm />
    </AdminPageLayout>
  );
};
