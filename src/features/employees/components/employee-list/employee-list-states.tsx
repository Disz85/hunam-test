import type { ReactNode } from 'react';

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
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="inline-block size-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent" />
          <p className="mt-4 text-sm text-gray-600">Loading employees...</p>
        </div>
      </div>
    );
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
