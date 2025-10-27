import { useNavigate, useSearch } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { AdminPageLayout } from '@/components/layouts/admin-page-layout';
import { Pagination } from '@/components/ui/pagination/pagination';

import { EmployeeListContent } from '../components/employee-list/employee-list-content';
import { EmployeeListSearchHeader } from '../components/employee-list/employee-list-search-header';
import { EmployeeListStates } from '../components/employee-list/employee-list-states';
import { EmployeeTable } from '../components/employee-table/employee-table';
import { useEmployeeList } from '../hooks/use-employee-list';
import { useEmployeeTableColumns } from '../hooks/use-employee-table';

/**
 * Employee list page component
 *
 * Displays employees in a table with search, pagination, and sorting
 */
export const EmployeeListPage = () => {
  const { t } = useTranslation('employees');

  // Get search params from URL (typed by route validation)
  const searchParams = useSearch({
    from: '/admin/employees/',
  });
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
      search: {
        ...searchParams,
        search: newSearch,
        page: 1,
      },
    });
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    void navigate({
      to: '/admin/employees',
      search: {
        ...searchParams,
        page: newPage,
      },
    });
  };

  const employees = data?.data ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / limit);

  return (
    <AdminPageLayout
      title={t('title')}
      description={t('description')}
      header={
        <EmployeeListSearchHeader
          searchValue={search}
          onSearchChange={handleSearchChange}
        />
      }
    >
      <EmployeeListStates isLoading={isLoading} error={error}>
        <EmployeeListContent total={total}>
          <EmployeeTable data={employees} columns={columns} />
        </EmployeeListContent>

        {total > 0 && (
          <div className="mt-6 pb-20 sm:pb-0">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              totalItems={total}
              itemsPerPage={limit}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </EmployeeListStates>
    </AdminPageLayout>
  );
};
