import type { ReactNode } from 'react';

import { AdminHeader } from '@/components/layouts/admin-header';

type AdminPageLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  title: string;
  description?: string;
};

/**
 * Admin page layout component
 *
 * Provides consistent layout structure for all admin pages:
 * - Sticky header bar with hamburger menu
 * - Content area with padding
 * - Page title and description
 * - Responsive design
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
