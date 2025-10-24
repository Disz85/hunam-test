import { createFileRoute } from '@tanstack/react-router';

import { DashboardPage } from '@/features/dashboard/pages/dashboard-page';

/**
 * Admin index route - dashboard page
 *
 * Main admin dashboard with overview cards
 */
export const Route = createFileRoute('/admin/')({
  component: DashboardPage,
});
