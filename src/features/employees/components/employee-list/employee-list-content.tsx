import type { ReactNode } from 'react';

type EmployeeListContentProps = {
  total: number;
  children: ReactNode;
};

/**
 * Employee list content component
 *
 * Provides consistent content structure with employee count
 */
export const EmployeeListContent = ({
  total,
  children,
}: EmployeeListContentProps) => {
  return (
    <>
      <div>
        <p className="text-sm text-gray-500">
          {total} {total === 1 ? 'employee' : 'employees'} total
        </p>
      </div>

      {children}
    </>
  );
};
