import { useTranslation } from 'react-i18next';

import { AdminPageLayout } from '@/components/layouts/admin-page-layout';
import { BackButton } from '@/components/ui/button/back-button';

import { EmployeeForm } from '../components/employee-form/employee-form';

/**
 * Employee create page component
 */
export const EmployeeCreatePage = () => {
  const { t } = useTranslation('employees');

  return (
    <AdminPageLayout
      title={t('create')}
      description={t('createDesc')}
      header={<BackButton />}
    >
      <EmployeeForm />
    </AdminPageLayout>
  );
};
