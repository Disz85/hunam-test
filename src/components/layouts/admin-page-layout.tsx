/**
 * Layout components module
 *
 * @module components/layouts/admin-page-layout
 */

import type { ReactNode } from 'react';

import { AdminHeader } from '@/components/layouts/admin-header';

/**
 * Admin page layout component props
 */
type AdminPageLayoutProps = {
  /** Page content */
  children: ReactNode;
  /** Optional custom header content */
  header?: ReactNode;
  /** Page title */
  title: string;
  /** Optional page description */
  description?: string;
};

/**
 * Admin page layout component
 *
 * Provides consistent layout structure for all admin pages.
 * Features:
 * - Sticky header bar with hamburger menu for mobile
 * - Content area with responsive padding
 * - Page title and description section
 * - Fully responsive design
 *
 * @param {AdminPageLayoutProps} props - Component props
 *
 * @example
 * ```tsx
 * import { AdminPageLayout } from '@/components/layouts/admin-page-layout';
 *
 * <AdminPageLayout title="Employees" description="Manage employee records">
 *   <EmployeeList />
 * </AdminPageLayout>
 * ```
 */
export const AdminPageLayout = ({
  children,
  header,
  title,
  description,
}: AdminPageLayoutProps) => {
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
