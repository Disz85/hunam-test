import { Outlet, useNavigate } from '@tanstack/react-router';

import { useAuth } from '@/features/auth/hooks/use-auth';

/**
 * Employees layout component
 *
 * Protected layout with navigation and logout functionality
 */
export const EmployeesLayout = () => {
  const { logout, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    void logout().then(() => {
      void navigate({ to: '/login' });
    });
  };

  return (
    <div>
      <nav>
        <h1>Employee Management</h1>
        <button onClick={handleLogout} disabled={isLoading}>
          {isLoading ? 'Logging out...' : 'Logout'}
        </button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
