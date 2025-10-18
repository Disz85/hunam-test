import { Outlet } from '@tanstack/react-router';

import { TokenStorage } from '@/lib/token-storage';

/**
 * Employees layout component
 *
 * Protected layout with basic navigation and logout
 */
export const EmployeesLayout = () => {
  const handleLogout = () => {
    TokenStorage.removeToken();
    window.location.href = '/login';
  };

  return (
    <div>
      <nav>
        <h1>Employee Management</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
