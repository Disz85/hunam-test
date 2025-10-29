/**
 * Navigation configuration module
 *
 * @module config/navigation-config
 */

import { ChartBarIcon, UsersIcon } from '@heroicons/react/24/outline';

/**
 * Navigation item configuration
 *
 * Defines the structure for navigation menu items with icons and routing.
 */
export type NavigationItem = {
  /** Display name of the navigation item */
  name: string;
  /** Route path for navigation */
  href: string;
  /** HeroIcon component for the navigation item */
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Optional description/tooltip text */
  description?: string;
  /** Whether to use exact path matching */
  exactMatch?: boolean;
};

/**
 * Admin navigation configuration
 *
 * Centralized navigation items for the admin layout sidebar.
 * Used in the AdminLayout component for consistent navigation structure.
 *
 * @example
 * ```typescript
 * import { adminNavigation } from '@/config/navigation-config';
 *
 * // Map navigation items to menu
 * adminNavigation.map(item => <NavItem key={item.href} {...item} />);
 * ```
 */
export const adminNavigation: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: ChartBarIcon,
    description: 'Overview and statistics',
    exactMatch: true,
  },
  {
    name: 'Employees',
    href: '/admin/employees',
    icon: UsersIcon,
    description: 'Manage employees',
  },
];
