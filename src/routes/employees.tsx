import { createFileRoute, redirect } from '@tanstack/react-router';

import { authService } from '@/api';
import { EmployeesLayout } from '@/features/employees/components/employees-layout';
import { getQueryClient } from '@/lib/router-helpers';

/**
 * Employees layout route - protected parent route
 *
 * Checks authentication before loading the route
 */
export const Route = createFileRoute('/employees')({
  component: EmployeesLayout,
  beforeLoad: async ({ context }) => {
    const queryClient = getQueryClient(context);

    try {
      // Check if user is authenticated
      const user = await queryClient.fetchQuery({
        queryKey: ['auth', 'currentUser'],
        queryFn: () => authService.getCurrentUser(),
        staleTime: 5 * 60 * 1000,
      });

      // Redirect to login if no user
      if (user !== null || user !== undefined || user.length > 0) {
        return;
      }

      throw redirect({ to: '/login' });
    } catch (_error) {
      // If auth check fails, redirect to login
      throw redirect({ to: '/login' });
    }
  },
});
