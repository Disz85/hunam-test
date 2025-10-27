import { Button } from '@headlessui/react';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/cn';

type LogoutButtonProps = {
  isLoading: boolean;
  onLogout: () => void;
};

const BASE_BUTTON_CLASSES =
  'group flex w-full gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50';

const ICON_CLASSES =
  'size-5 shrink-0 text-gray-400 transition-colors group-hover:text-gray-600';

/**
 * Logout button component
 *
 * Handles user logout with loading state using Headless UI Button
 */
export const LogoutButton = ({ isLoading, onLogout }: LogoutButtonProps) => {
  return (
    <Button
      onClick={onLogout}
      disabled={isLoading}
      className={cn(BASE_BUTTON_CLASSES)}
    >
      <ArrowRightStartOnRectangleIcon
        className={ICON_CLASSES}
        aria-hidden="true"
      />
      {isLoading ? 'Logging out...' : 'Logout'}
    </Button>
  );
};
