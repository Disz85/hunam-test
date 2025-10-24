import { Link, useMatchRoute } from '@tanstack/react-router';

import type { NavigationItem } from '@/config/navigation-config';

type NavigationItemsProps = {
  navigation: NavigationItem[];
  onNavigate?: () => void;
};

/**
 * Navigation items component
 *
 * Renders navigation menu items with active state
 */
export const NavigationItems = ({
  navigation,
  onNavigate,
}: NavigationItemsProps) => {
  const matchRoute = useMatchRoute();

  return (
    <ul className="space-y-0.5">
      {navigation.map(item => {
        const isActive = matchRoute({
          to: item.href,
        });

        const linkClassName = isActive
          ? 'group flex gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-indigo-50 hover:text-indigo-600 bg-indigo-50 text-gray-900'
          : 'group flex gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-indigo-50 hover:text-indigo-600 text-gray-700';

        const iconClassName = isActive
          ? 'size-5 shrink-0 transition-colors group-hover:text-indigo-600 text-indigo-600'
          : 'size-5 shrink-0 transition-colors group-hover:text-indigo-600 text-gray-400';

        return (
          <li key={item.name}>
            <Link to={item.href} className={linkClassName} onClick={onNavigate}>
              <item.icon className={iconClassName} aria-hidden="true" />
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
