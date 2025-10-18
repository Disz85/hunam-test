import { createFileRoute } from '@tanstack/react-router';

import { EmployeeListPage } from '@/features/employees/pages/employee-list-page';

/**
 * Employees list route
 *
 * Displays all employees in a table
 */
export const Route = createFileRoute('/employees/')({
  component: EmployeeListPage,
});
