import type { ReactNode } from 'react';

import { AdminHeader } from '@/components/layouts/admin-header';

type EmployeeListLayoutProps = {
  children: ReactNode;
  header: ReactNode;
  title: string;
  description?: string;
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
  title,
  description,
}: EmployeeListLayoutProps) => {
  return (
    <>
      <AdminHeader>{header}</AdminHeader>

      <section className="p-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
            {description && (
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            )}
          </div>
          {children}
        </div>
      </section>
    </>
  );
};
