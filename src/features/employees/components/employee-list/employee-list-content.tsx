import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t: tCommon } = useTranslation('common');
  const { t: tEmployees } = useTranslation('employees');

  return (
    <>
      <div>
        <p className="text-sm text-gray-500">
          {total}{' '}
          {total === 1 ? tEmployees('employee') : tEmployees('employees')}{' '}
          {tCommon('total')}
        </p>
      </div>

      {children}
    </>
  );
};
