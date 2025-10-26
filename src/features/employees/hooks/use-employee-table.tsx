import type { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

import type { EmployeeDto } from '@/api';

import { EmployeeTableActions } from '../components/employee-table/employee-table-actions';

/**
 * Employee table columns definition
 */
export const useEmployeeTableColumns = (): ColumnDef<EmployeeDto>[] => {
  return useMemo<ColumnDef<EmployeeDto>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'email',
        header: 'Email',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
        cell: info => info.getValue(),
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => <EmployeeTableActions employee={row.original} />,
        meta: {
          align: 'right',
        },
      },
    ],
    []
  );
};
