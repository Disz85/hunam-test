import { createFileRoute } from '@tanstack/react-router';

import { EmployeeCreatePage } from '@/features/employees/pages/employee-create-page';

/**
 * Create new employee route
 */
export const Route = createFileRoute('/employees/new')({
  component: EmployeeCreatePage,
});
