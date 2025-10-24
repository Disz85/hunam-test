import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

type LogoutButtonProps = {
  isLoading: boolean;
  onLogout: () => void;
};

/**
 * Logout button component
 *
 * Handles user logout with loading state
 */
export const LogoutButton = ({ isLoading, onLogout }: LogoutButtonProps) => {
  return (
    <button
      onClick={onLogout}
      disabled={isLoading}
      className="group flex w-full gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50"
    >
      <ArrowRightStartOnRectangleIcon
        className="size-5 shrink-0 text-gray-400 transition-colors group-hover:text-gray-600"
        aria-hidden="true"
      />
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
};
