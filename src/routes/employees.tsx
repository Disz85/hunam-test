import { createFileRoute, redirect } from '@tanstack/react-router';

import { authService } from '@/api';
import { EmployeesLayout } from '@/features/employees/components/employees-layout';
import { RouterHelpers } from '@/lib';

const AUTH_CACHE_TIME = 5 * 60 * 1000;

/**
 * Employees layout route - protected parent route
 *
 * All child routes (/employees/*) inherit the authentication check.
 */
export const Route = createFileRoute('/employees')({
  beforeLoad: async ({ context, location }) => {
    const queryClient = RouterHelpers.getQueryClient(context);

    try {
      await queryClient.ensureQueryData({
        queryKey: ['auth', 'currentUser'],
        queryFn: () => authService.getCurrentUser(),
        staleTime: AUTH_CACHE_TIME,
      });
    } catch (_error) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      });
    }
  },
  component: EmployeesLayout,
});
