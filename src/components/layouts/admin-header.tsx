/**
 * Layout components module
 *
 * @module components/layouts/admin-header
 */

import { Button } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '../ui/switcher/language-switcher';

/**
 * Admin header component props
 */
type AdminHeaderProps = {
  /** Optional header content */
  children?: ReactNode;
  /** Optional page title */
  title?: string;
};

/**
 * Admin header component
 *
 * Provides consistent header with hamburger menu for mobile navigation.
 * Automatically handles sidebar opening using Headless UI Button and custom events.
 * Includes language switcher for internationalization.
 *
 * @param {AdminHeaderProps} props - Component props
 * @param {ReactNode} [props.children] - Optional header content
 * @param {string} [props.title] - Optional page title
 *
 * @example
 * ```tsx
 * import { AdminHeader } from '@/components/layouts/admin-header';
 *
 * <AdminHeader>
 *   <UserInfo />
 * </AdminHeader>
 * ```
 */
export const AdminHeader = ({ children }: AdminHeaderProps) => {
  const { t } = useTranslation('common');

  const handleMenuOpen = () => {
    const event = new CustomEvent('openSidebar');
    window.dispatchEvent(event);
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
      <Button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 cursor-pointer lg:hidden"
        onClick={handleMenuOpen}
      >
        <span className="sr-only">{t('openSidebar')}</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </Button>
      {children && <div className="flex-1">{children}</div>}
      <div className="ml-auto">
        <LanguageSwitcher />
      </div>
    </header>
  );
};
