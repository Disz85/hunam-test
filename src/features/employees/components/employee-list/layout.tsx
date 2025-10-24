import type { ReactNode } from 'react';

import { PageHeader } from '@/components/layouts/page-header';

type EmployeeListLayoutProps = {
  children: ReactNode;
  header: ReactNode;
};

/**
 * Employee list layout component
 *
 * Provides consistent layout structure for employee list pages:
 * - Sticky header bar with hamburger menu
 * - Content area with padding
 * - Responsive design
 */
export const EmployeeListLayout = ({
  children,
  header,
}: EmployeeListLayoutProps) => {
  return (
    <>
      <PageHeader>{header}</PageHeader>
      <div className="p-4">
        <div className="space-y-6">{children}</div>
      </div>
    </>
  );
};
