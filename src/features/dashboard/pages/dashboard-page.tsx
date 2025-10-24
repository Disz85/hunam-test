import {
  BuildingOfficeIcon,
  ChartBarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import { PageHeader } from '@/components/layouts/page-header';

import { DashboardCard } from '../components/dashboard-card';
import { DashboardGrid } from '../components/dashboard-grid';
import { DashboardHeader } from '../components/dashboard-header';

/**
 * Admin dashboard page component
 *
 * Main admin page with overview and navigation cards
 */
export const DashboardPage = () => {
  return (
    <>
      <PageHeader />

      <section className="p-6">
        <DashboardHeader />

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
      </section>
    </>
  );
};
