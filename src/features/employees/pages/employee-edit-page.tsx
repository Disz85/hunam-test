import { AdminPageLayout } from '@/components/layouts/admin-page-layout';
import { BackButton } from '@/components/ui/button/back-button';

import { EmployeeForm } from '../components/employee-form/employee-form';

/**
 * Employee edit page component
 */
export const EmployeeEditPage = ({ id }: { id: string }) => {
  return (
    <AdminPageLayout
      title="Edit Employee"
      description="Update the employee information below."
      header={<BackButton />}
    >
      <EmployeeForm isEdit={true} employeeId={Number.parseInt(id)} />
    </AdminPageLayout>
  );
};
