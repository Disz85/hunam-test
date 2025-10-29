/**
 * Dashboard components module
 *
 * @module features/dashboard/components/dashboard-grid
 */

import type { ReactNode } from 'react';

/**
 * Dashboard grid component props
 */
type DashboardGridProps = {
  /** Grid children (typically DashboardCard components) */
  children: ReactNode;
};

/**
 * Dashboard grid component
 *
 * Responsive grid layout for dashboard cards.
 * Automatically adapts to screen size: 1 column on mobile, 2 on tablet, 3 on desktop.
 *
 * @param {DashboardGridProps} props - Component props
 *
 * @example
 * ```tsx
 * import { DashboardGrid } from '@/features/dashboard/components/dashboard-grid';
 * import { DashboardCard } from '@/features/dashboard/components/dashboard-card';
 *
 * <DashboardGrid>
 *   <DashboardCard title="Employees" icon={<UsersIcon />} to="/employees" />
 *   <DashboardCard title="Reports" icon={<ChartIcon />} disabled />
 *   <DashboardCard title="Settings" icon={<CogIcon />} to="/settings" />
 * </DashboardGrid>
 * ```
 */
export const DashboardGrid = ({ children }: DashboardGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
