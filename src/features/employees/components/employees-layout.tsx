import { Bars3Icon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import { useAuth } from '@/features/auth/hooks/use-auth';

import { NavigationMenu } from './navigation-menu';

const navigation = [{ name: 'Employees', href: '/employees', icon: UsersIcon }];

/**
 * Employees layout component
 *
 * Protected layout with sidebar navigation and logout functionality
 */
export const EmployeesLayout = () => {
  const { logout, isLoading, currentUser } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    void logout().then(() => {
      void navigate({ to: '/login' });
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-gray-900/80 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      <div
        className={`fixed inset-y-0 z-50 flex w-64 flex-col bg-white transition-transform duration-300 lg:translate-x-0 lg:border-r lg:border-gray-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <h1 className="text-base font-semibold text-gray-900">
              Employee Management
            </h1>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-indigo-600 hover:text-indigo-500 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>
          <NavigationMenu
            navigation={navigation}
            currentUser={currentUser}
            isLoading={isLoading}
            onLogout={handleLogout}
            onNavigate={() => setSidebarOpen(false)}
          />
        </div>
      </div>

      <div className="lg:pl-64">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-indigo-600 transition-colors hover:text-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center">
              <h1 className="text-sm font-semibold text-gray-900">
                Employee Management
              </h1>
            </div>
          </div>
        </div>

        <main className="py-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
