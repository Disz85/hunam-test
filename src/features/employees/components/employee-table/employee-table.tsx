import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

import type { EmployeeDto } from '@/api';

import { EmployeeTableCard } from './employee-table-card';

type ColumnMetadata = {
  align?: 'left' | 'right';
};

/**
 * Get alignment class based on column metadata
 */
const getAlignClass = (metadata?: ColumnMetadata): string => {
  return metadata?.align === 'right' ? 'text-right' : 'text-left';
};

type EmployeeTableProps = {
  data: EmployeeDto[];
  columns: ColumnDef<EmployeeDto>[];
};

/**
 * Empty State Component
 */
const EmptyState = () => {
  const { t } = useTranslation('employees');

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="px-6 py-12 text-center">
        <p className="text-sm text-gray-500">{t('noEmployees')}</p>
      </div>
    </div>
  );
};

/**
 * Mobile Card List Component
 */
const MobileCardList = ({ data }: { data: EmployeeDto[] }) => (
  <div className="space-y-3 sm:hidden">
    {data.map(employee => (
      <EmployeeTableCard key={employee.id} employee={employee} />
    ))}
  </div>
);

/**
 * Desktop Table Component
 */
const DesktopTable = ({
  table,
}: {
  table: ReturnType<typeof useReactTable<EmployeeDto>>;
}) => (
  <div className="hidden overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm sm:block">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className={`px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 ${getAlignClass(header.column.columnDef.meta)}`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="transition-colors hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className={`whitespace-nowrap px-6 py-4 text-sm text-gray-900 ${getAlignClass(cell.column.columnDef.meta)}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/**
 * Employee Table Component
 *
 * Responsive table component that displays:
 * - Mobile (< 640px): Card list view for better UX
 * - Desktop (≥ 640px): Traditional table view
 *
 * Uses TanStack Table for table state management
 */
export const EmployeeTable = ({ data, columns }: EmployeeTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (data.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <MobileCardList data={data} />
      <DesktopTable table={table} />
    </>
  );
};
