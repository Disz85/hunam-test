/**
 * Employee table hooks module
 *
 * @module features/employees/hooks/use-employee-table
 */

import type { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { EmployeeDto } from '@/api';

import { EmployeeTableActions } from '../components/employee-table/employee-table-actions';

/**
 * Hook for generating employee table columns
 *
 * Returns TanStack Table column definitions for the employee table.
 * Columns are memoized to prevent unnecessary re-renders.
 *
 * @returns {ColumnDef<EmployeeDto>[]} Array of column definitions for the employee table
 *
 * @example
 * ```tsx
 * import { useEmployeeTableColumns } from '@/features/employees/hooks/use-employee-table';
 *
 * const columns = useEmployeeTableColumns();
 * return <Table columns={columns} data={employees} />;
 * ```
 */
export const useEmployeeTableColumns = (): ColumnDef<EmployeeDto>[] => {
  const { t } = useTranslation('common');

  return useMemo<ColumnDef<EmployeeDto>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: t('fields.firstName'),
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'lastName',
        header: t('fields.lastName'),
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'email',
        header: t('fields.email'),
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'phone',
        header: t('fields.phoneNumber'),
        cell: info => info.getValue(),
      },
      {
        id: 'actions',
        header: t('actions'),
        cell: ({ row }) => <EmployeeTableActions employee={row.original} />,
        meta: {
          align: 'right',
        },
      },
    ],
    [t]
  );
};
