import { Link, useMatchRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import type { NavigationItem } from '@/config/navigation-config';
import { cn } from '@/lib/cn';

type NavigationItemsProps = {
  navigation: NavigationItem[];
  onNavigate?: () => void;
};

const BASE_LINK_CLASSES =
  'group flex gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-indigo-50 hover:text-indigo-600';

const BASE_ICON_CLASSES =
  'size-5 shrink-0 transition-colors group-hover:text-indigo-600';

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
  const { t } = useTranslation('common');

  return (
    <ul className="space-y-0.5">
      {navigation.map(item => {
        const isActive = Boolean(
          matchRoute({
            to: item.href,
            fuzzy: !item.exactMatch,
          })
        );

        const translationKey =
          item.href === '/admin'
            ? 'navigation.dashboard'
            : 'navigation.employees';
        const translatedName = t(translationKey);

        return (
          <li key={item.name}>
            <Link
              to={item.href}
              className={cn(
                BASE_LINK_CLASSES,
                isActive ? 'bg-indigo-50 text-gray-900' : 'text-gray-700'
              )}
              onClick={onNavigate}
            >
              <item.icon
                className={cn(
                  BASE_ICON_CLASSES,
                  isActive ? 'text-indigo-600' : 'text-gray-400'
                )}
                aria-hidden="true"
              />
              {translatedName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
