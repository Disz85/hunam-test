import { Outlet } from '@tanstack/react-router';

import { authService } from '@/api/auth';

/**
 * Employees layout component
 *
 * Protected layout with basic navigation and logout
 */
export const EmployeesLayout = () => {
  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (_error) {
      // Ignore logout errors - redirect anyway
    }
    window.location.href = '/login';
  };

  return (
    <div>
      <nav>
        <h1>Employee Management</h1>
        <button onClick={() => void handleLogout()}>Logout</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
