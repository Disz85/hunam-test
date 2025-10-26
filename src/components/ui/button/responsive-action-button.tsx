import { Button } from '@headlessui/react';
import type { ComponentProps, ReactElement } from 'react';

/**
 * Props for responsive action button
 */
type ResponsiveActionButtonProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: string;
  className?: string;
} & ComponentProps<typeof Button>;

/**
 * Responsive action button component:
 * - Mobile: Floating Action Button (FAB) with icon only
 * - Desktop: Standard button with icon and text
 *
 * Uses Headless UI Button for accessibility
 *
 * @example
 * ```tsx
 * <ResponsiveActionButton
 *   icon={PlusIcon}
 *   onClick={handleClick}
 *   aria-label="Create Employee"
 * >
 *   New Employee
 * </ResponsiveActionButton>
 * ```
 */
export const ResponsiveActionButton = ({
  icon: Icon,
  children,
  className = '',
  ...props
}: ResponsiveActionButtonProps): ReactElement => {
  const baseClasses =
    'flex flex-shrink-0 items-center justify-center bg-indigo-600 text-white transition-all hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

  const responsiveClasses =
    'fixed bottom-6 right-6 z-50 size-14 rounded-full shadow-lg sm:static sm:size-auto sm:gap-x-2 sm:rounded-md sm:px-3.5 sm:py-2.5 sm:shadow-sm';

  return (
    <Button
      {...props}
      className={`${baseClasses} ${responsiveClasses} ${className}`}
    >
      <Icon className="size-6 sm:size-5 sm:-ml-0.5" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">{children}</span>
    </Button>
  );
};
