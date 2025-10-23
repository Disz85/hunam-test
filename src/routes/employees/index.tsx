import { createFileRoute } from '@tanstack/react-router';

import { EmployeeListPage } from '@/features/employees/pages/employee-list-page';
import { employeeListSearchSchema } from '@/features/employees/schemas/employee-list-search-schema';

/**
 * Employees list route
 *
 * Displays all employees in a table with search params support
 */
export const Route = createFileRoute('/employees/')({
  component: EmployeeListPage,
  validateSearch: employeeListSearchSchema,
});
