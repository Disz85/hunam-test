import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import type { EmployeeDto } from '@/api';

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
 * Employee table component
 *
 * Displays employee data in a clean, Vercel-style table
 */
export const EmployeeTable = ({ data, columns }: EmployeeTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
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

      {data.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-sm text-gray-500">No employees found</p>
        </div>
      )}
    </div>
  );
};
