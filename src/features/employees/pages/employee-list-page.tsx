import { useNavigate, useSearch } from '@tanstack/react-router';

import { EmployeeListContent } from '../components/employee-list/content';
import { EmployeeListHeader } from '../components/employee-list/header';
import { EmployeeListLayout } from '../components/employee-list/layout';
import { EmployeeListStates } from '../components/employee-list/states';
import { EmployeeTable } from '../components/employee-table/table';
import { useEmployeeList } from '../hooks/use-employee-list';
import { useEmployeeTableColumns } from '../hooks/use-employee-table';

/**
 * Employee list page component
 *
 * Displays employees in a table with search, pagination, and sorting
 */
export const EmployeeListPage = () => {
  // Get search params from URL (typed by route validation)
  const searchParams = useSearch({ from: '/admin/employees' });
  const navigate = useNavigate();

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

  // Handle search change
  const handleSearchChange = (newSearch: string) => {
    void navigate({
      to: '/admin/employees',
      search: { ...searchParams, search: newSearch, page: 1 },
    });
  };

  const employees = data?.data ?? [];
  const total = data?.total ?? 0;

  return (
    <EmployeeListLayout
      header={
        <EmployeeListHeader
          searchValue={search}
          onSearchChange={handleSearchChange}
        />
      }
    >
      <EmployeeListStates isLoading={isLoading} error={error}>
        <EmployeeListContent total={total}>
          <EmployeeTable data={employees} columns={columns} />
        </EmployeeListContent>
      </EmployeeListStates>
    </EmployeeListLayout>
  );
};
