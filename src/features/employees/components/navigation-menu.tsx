import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { Link } from '@tanstack/react-router';

import type { useAuth } from '@/features/auth/hooks/use-auth';

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type NavigationMenuProps = {
  navigation: NavigationItem[];
  currentUser: ReturnType<typeof useAuth>['currentUser'];
  isLoading: boolean;
  onLogout: () => void;
  onNavigate?: () => void;
};

/**
 * Navigation menu component
 *
 * Shared navigation menu used in both mobile and desktop sidebars
 */
export const NavigationMenu = ({
  navigation,
  currentUser,
  isLoading,
  onLogout,
  onNavigate,
}: NavigationMenuProps) => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul className="flex flex-1 flex-col gap-y-1">
        <li>
          <ul className="space-y-0.5">
            {navigation.map(item => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="group flex gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                  activeProps={{
                    className: 'bg-indigo-50 text-gray-900',
                  }}
                  onClick={onNavigate}
                >
                  <item.icon
                    className="size-5 shrink-0 text-gray-400 transition-colors group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-auto">
          <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
            <p className="text-sm font-medium text-gray-900">
              {currentUser?.username || 'User'}
            </p>
            <p className="text-xs text-gray-500">Logged in</p>
          </div>
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
        </li>
      </ul>
    </nav>
  );
};
