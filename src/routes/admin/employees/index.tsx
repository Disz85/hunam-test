import { createFileRoute } from '@tanstack/react-router';

import { EmployeeListPage } from '@/features/employees/pages/employee-list-page';
import { employeeListSearchSchema } from '@/features/employees/schemas/employee-list-search-schema';

/**
 * Employees route - displays employee list
 *
 * Child route of /admin, inherits AdminLayout and auth check
 */
export const Route = createFileRoute('/admin/employees/')({
  component: EmployeeListPage,
  validateSearch: employeeListSearchSchema,
});
