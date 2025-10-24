import { createFileRoute, redirect } from '@tanstack/react-router';

import { authService } from '@/api';
import { AdminSidebarLayout } from '@/components/layouts/admin-sidebar-layout';
import { EMPLOYEE_LIST_CACHE_TIME } from '@/features/employees/hooks/use-employee-list';
import { getQueryClient } from '@/lib/router-helpers';

/**
 * Admin layout route - protected parent route for all admin features
 *
 * Checks authentication before loading any admin route
 * Provides AdminLayout for all child routes
 */
export const Route = createFileRoute('/admin')({
  component: AdminSidebarLayout,
  beforeLoad: async ({ context }) => {
    const queryClient = getQueryClient(context);

    try {
      // Check if user is authenticated
      const user = await queryClient.fetchQuery({
        queryKey: ['auth', 'currentUser'],
        queryFn: () => authService.getCurrentUser(),
        staleTime: EMPLOYEE_LIST_CACHE_TIME,
      });

      // Redirect to login if no user
      if (!user || user.length === 0) {
        throw redirect({ to: '/login' });
      }
    } catch (error) {
      // If auth check fails, redirect to login
      if (error instanceof Error && 'redirect' in error) {
        throw error;
      }
      throw redirect({ to: '/login' });
    }
  },
});
