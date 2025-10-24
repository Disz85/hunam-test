import type { ReactNode } from 'react';

type EmployeeListContentProps = {
  total: number;
  children: ReactNode;
};

/**
 * Employee list content component
 *
 * Provides consistent content structure with title and count
 */
export const EmployeeListContent = ({
  total,
  children,
}: EmployeeListContentProps) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Employees</h1>
        <p className="mt-1 text-sm text-gray-500">
          {total} {total === 1 ? 'employee' : 'employees'} total
        </p>
      </div>

      {children}
    </>
  );
};
