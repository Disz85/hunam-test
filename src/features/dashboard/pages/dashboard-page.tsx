import {
  BuildingOfficeIcon,
  ChartBarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

import { AdminPageLayout } from '@/components/layouts/admin-page-layout';

import { DashboardCard } from '../components/dashboard-card';
import { DashboardGrid } from '../components/dashboard-grid';

/**
 * Admin dashboard page component
 *
 * Main admin page with overview and navigation cards
 */
export const DashboardPage = () => {
  const { t: tCommon } = useTranslation('common');
  const { t: tEmployees } = useTranslation('employees');

  return (
    <AdminPageLayout
      title={tCommon('navigation.dashboard')}
      description={tCommon('dashboard.description')}
    >
      <DashboardGrid>
        <DashboardCard
          title={tEmployees('title')}
          description={tEmployees('description')}
          to="/admin/employees"
          icon={<UsersIcon />}
        />

        <DashboardCard
          title={tCommon('dashboard.comingSoon')}
          description={tCommon('dashboard.newFeatures')}
          disabled
          icon={<BuildingOfficeIcon />}
        />

        <DashboardCard
          title={tCommon('dashboard.comingSoon')}
          description={tCommon('dashboard.newFeatures')}
          disabled
          icon={<ChartBarIcon />}
        />
      </DashboardGrid>
    </AdminPageLayout>
  );
};
