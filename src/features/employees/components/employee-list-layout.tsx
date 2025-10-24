import type { ReactNode } from 'react';

type EmployeeListLayoutProps = {
  children: ReactNode;
  header: ReactNode;
};

/**
 * Employee list layout component
 *
 * Provides consistent layout structure for employee list pages:
 * - Sticky header bar
 * - Content area with padding
 * - Responsive design
 */
export const EmployeeListLayout = ({
  children,
  header,
}: EmployeeListLayoutProps) => {
  return (
    <>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
        {header}
      </div>

      <div className="p-4">
        <div className="space-y-6">{children}</div>
      </div>
    </>
  );
};
