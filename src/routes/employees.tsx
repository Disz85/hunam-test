import { createFileRoute, redirect } from '@tanstack/react-router';

import { EmployeesLayout } from '@/components/layouts/employees-layout';
import { TokenStorage } from '@/lib/token-storage';

/**
 * Employees layout route - protected parent route
 *
 * All child routes (/employees/*) inherit the authentication check
 */
export const Route = createFileRoute('/employees')({
  beforeLoad: ({ location }) => {
    if (!TokenStorage.hasToken()) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: EmployeesLayout,
});
