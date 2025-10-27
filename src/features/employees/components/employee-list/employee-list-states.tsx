import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { PageSpinner } from '@/components/ui/loading/page-spinner';

type EmployeeListStatesProps = {
  isLoading: boolean;
  error: unknown;
  children: ReactNode;
};

/**
 * Employee list states component
 *
 * Handles loading and error states for employee list
 */
export const EmployeeListStates = ({
  isLoading,
  error,
  children,
}: EmployeeListStatesProps) => {
  const { t: tCommon } = useTranslation('common');
  const { t: tErrors } = useTranslation('errors');

  if (isLoading) {
    return <PageSpinner text={tCommon('loading')} />;
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-sm text-red-800">
          {tErrors('loadingEmployees')}:{' '}
          {error instanceof Error ? error.message : tErrors('unknown')}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};
