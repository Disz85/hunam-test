import { useSearch } from '@tanstack/react-router';

import { EmployeeTable } from '../components/employee-table';
import { useEmployeeList } from '../hooks/use-employee-list';
import { useEmployeeTableColumns } from '../hooks/use-employee-table';

/**
 * Employee list page component
 *
 * Displays employees in a table with search, pagination, and sorting
 */
export const EmployeeListPage = () => {
  // Get search params from URL (typed by route validation)
  const searchParams = useSearch({ from: '/employees/' });

  const page = searchParams.page ?? 1;
  const limit = searchParams.limit ?? 10;
  const search = searchParams.search ?? '';
  const orderBy = searchParams.orderBy ?? '';

  // Fetch employees with filters
  const { data, isLoading, error } = useEmployeeList({
    Search: search,
    OrderBy: orderBy,
    Limit: limit,
    Offset: (page - 1) * limit,
  });

  // Table columns
  const columns = useEmployeeTableColumns();

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
          Error loading employees: {String(error)}
        </p>
      </div>
    );
  }

  const employees = data?.data ?? [];
  const total = data?.total ?? 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Employees</h1>
          <p className="mt-1 text-sm text-gray-500">
            {total} {total === 1 ? 'employee' : 'employees'} total
          </p>
        </div>
      </div>

      {/* Table */}
      <EmployeeTable data={employees} columns={columns} />
    </div>
  );
};
