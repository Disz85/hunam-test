import { XMarkIcon } from '@heroicons/react/24/outline';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { adminNavigation } from '@/config/navigation-config';
import { useAuth } from '@/features/auth/hooks/use-auth';

import { AdminNavigation } from '../navigation/admin-navigation';

/**
 * Admin sidebar layout component
 *
 * Protected layout with sidebar navigation and logout functionality
 * Used across all admin features (employees, etc.)
 */
export const AdminSidebarLayout = () => {
  const { logout, isLoading, currentUser } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation('common');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    void logout().then(() => {
      void navigate({ to: '/login' });
    });
  };

  // Listen for sidebar open events from child components
  useEffect(() => {
    const handleOpenSidebar = () => {
      setSidebarOpen(true);
    };

    window.addEventListener('openSidebar', handleOpenSidebar);
    return () => window.removeEventListener('openSidebar', handleOpenSidebar);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-gray-900/80 cursor-pointer lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label={t('closeSidebar')}
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
              {t('appName')}
            </h1>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-indigo-600 hover:text-indigo-500 cursor-pointer lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">{t('closeSidebar')}</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>
          <AdminNavigation
            navigation={adminNavigation}
            currentUser={currentUser}
            isLoading={isLoading}
            onLogout={handleLogout}
            onNavigate={() => setSidebarOpen(false)}
          />
        </div>
      </div>

      <div className="lg:pl-64">
        <Outlet />
      </div>
    </main>
  );
};
