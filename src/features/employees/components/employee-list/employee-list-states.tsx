import type { ReactNode } from 'react';

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
  if (isLoading) {
    return <PageSpinner text="Loading employees..." />;
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-sm text-red-800">
          Error loading employees:{' '}
          {error instanceof Error ? error.message : 'Unknown error'}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};
