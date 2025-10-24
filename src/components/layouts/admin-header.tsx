import { Button } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import type { ReactNode } from 'react';

type AdminHeaderProps = {
  children?: ReactNode;
  title?: string;
};

/**
 * Admin header component
 *
 * Provides consistent header with hamburger menu for mobile
 * Automatically handles sidebar opening using Headless UI Button
 */
export const AdminHeader = ({ children }: AdminHeaderProps) => {
  const handleMenuOpen = () => {
    const event = new CustomEvent('openSidebar');
    window.dispatchEvent(event);
  };

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
      <Button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={handleMenuOpen}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </Button>
      {children && <div className="flex-1">{children}</div>}
    </div>
  );
};
