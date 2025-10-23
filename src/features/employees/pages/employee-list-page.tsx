import { useSearch } from '@tanstack/react-router';

import { useEmployeeList } from '../hooks/use-employee-list';

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

  if (isLoading) {
    return (
      <div className="p-8">
        <p>Loading employees...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="text-red-600">Error loading employees: {String(error)}</p>
      </div>
    );
  }

  const employees = data?.data ?? [];
  const total = data?.total ?? 0;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <p className="mb-4">Total employees: {total}</p>

      <div className="space-y-4">
        {employees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          employees.map(employee => (
            <div key={employee.id} className="border p-4 rounded">
              <p>
                <strong>Name:</strong> {employee.firstName} {employee.lastName}
              </p>
              <p>
                <strong>Email:</strong> {employee.email}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Debug info */}
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">
          Debug: Page {page}, Limit {limit}, Total {total}
        </p>
      </div>
    </div>
  );
};
