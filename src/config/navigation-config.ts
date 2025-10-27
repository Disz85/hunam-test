import { ChartBarIcon, UsersIcon } from '@heroicons/react/24/outline';

export type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description?: string;
  exactMatch?: boolean;
};

/**
 * Admin navigation configuration
 *
 * Centralized navigation items for admin layout
 * Used in the AdminLayout component
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
