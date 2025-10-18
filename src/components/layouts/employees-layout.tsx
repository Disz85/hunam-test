import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Outlet, useNavigate } from '@tanstack/react-router';

import { authService } from '@/api';
import { TokenStorage } from '@/lib/token-storage';

/**
 * Employees layout component
 *
 * Protected layout with navigation and logout functionality
 */
export const EmployeesLayout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSettled: () => {
      TokenStorage.removeAuthenticated();
      queryClient.removeQueries({ queryKey: ['auth'] });
      void navigate({ to: '/login' });
    },
  });

  return (
    <div>
      <nav>
        <h1>Employee Management</h1>
        <button
          onClick={() => logoutMutation.mutate()}
          disabled={logoutMutation.isPending}
        >
          {logoutMutation.isPending ? 'Logging out...' : 'Logout'}
        </button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
