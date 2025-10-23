import { createFileRoute } from '@tanstack/react-router';

import { EmployeesLayout } from '@/features/employees/components/employees-layout';

/**
 * Employees layout route - protected parent route
 *
 * Authentication is handled by the backend via cookies
 * 401 responses automatically redirect to /login via ApiClient
 */
export const Route = createFileRoute('/employees')({
  component: EmployeesLayout,
});
