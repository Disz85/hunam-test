import type { ReactNode } from 'react';

type DashboardGridProps = {
  children: ReactNode;
};

/**
 * Dashboard grid component
 *
 * Responsive grid layout for dashboard cards
 */
export const DashboardGrid = ({ children }: DashboardGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
