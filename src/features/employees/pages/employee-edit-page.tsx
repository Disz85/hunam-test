import { useTranslation } from 'react-i18next';

import { AdminPageLayout } from '@/components/layouts/admin-page-layout';
import { BackButton } from '@/components/ui/button/back-button';

import { EmployeeForm } from '../components/employee-form/employee-form';

/**
 * Employee edit page component
 */
export const EmployeeEditPage = ({ id }: { id: string }) => {
  const { t } = useTranslation('employees');

  return (
    <AdminPageLayout
      title={t('edit')}
      description={t('editDesc')}
      header={<BackButton />}
    >
      <EmployeeForm isEdit={true} employeeId={Number.parseInt(id)} />
    </AdminPageLayout>
  );
};
