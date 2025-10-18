import { Outlet } from '@tanstack/react-router';

import { useAuth } from '@/hooks';

/**
 * Employees layout component
 *
 * Protected layout with navigation and logout functionality
 */
export const EmployeesLayout = () => {
  const { logout, isLogoutPending } = useAuth();

  return (
    <div>
      <nav>
        <h1>Employee Management</h1>
        <button onClick={() => logout()} disabled={isLogoutPending}>
          {isLogoutPending ? 'Logging out...' : 'Logout'}
        </button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
