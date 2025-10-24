import {
  BuildingOfficeIcon,
  ChartBarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import { AdminPageLayout } from '@/components/layouts/admin-page-layout';

import { DashboardCard } from '../components/dashboard-card';
import { DashboardGrid } from '../components/dashboard-grid';

/**
 * Admin dashboard page component
 *
 * Main admin page with overview and navigation cards
 */
export const DashboardPage = () => {
  return (
    <AdminPageLayout
      title="Dashboard"
      description="Welcome to the admin dashboard. Manage your employees and view system overview."
    >
      <DashboardGrid>
        <DashboardCard
          title="Employees"
          description="Manage employees"
          to="/admin/employees"
          icon={<UsersIcon />}
        />

        <DashboardCard
          title="Coming Soon..."
          description="New features"
          disabled
          icon={<BuildingOfficeIcon />}
        />

        <DashboardCard
          title="Coming Soon..."
          description="New features"
          disabled
          icon={<ChartBarIcon />}
        />
      </DashboardGrid>
    </AdminPageLayout>
  );
};
