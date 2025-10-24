import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

type DashboardCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  to?: string;
  disabled?: boolean;
};

/**
 * Dashboard card component
 *
 * Displays a feature card with icon, title, and description
 * Can be clickable (Link) or static (div)
 */
export const DashboardCard = ({
  title,
  description,
  icon,
  to,
  disabled = false,
}: DashboardCardProps) => {
  const isClickable = !disabled && to;

  const classes = {
    base: 'rounded-lg border border-gray-200 p-6',
    disabled: 'bg-gray-50',
    clickable:
      'group bg-white shadow-sm transition-all hover:border-indigo-300 hover:shadow-md',
    icon: {
      container: 'flex h-8 w-8 items-center justify-center rounded-md',
      background: {
        disabled: 'bg-gray-400',
        active: 'bg-indigo-600 transition-colors group-hover:bg-indigo-700',
      },
      icon: 'h-5 w-5 text-white',
    },
    title: {
      disabled: 'text-lg font-medium text-gray-500',
      active:
        'text-lg font-medium text-gray-900 transition-colors group-hover:text-indigo-600',
    },
    description: {
      disabled: 'text-sm text-gray-400',
      active: 'text-sm text-gray-500',
    },
  };

  const titleClasses = disabled ? classes.title.disabled : classes.title.active;
  const descriptionClasses = disabled
    ? classes.description.disabled
    : classes.description.active;

  const iconBackgroundClass = disabled
    ? classes.icon.background.disabled
    : classes.icon.background.active;

  const content = (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className={`${classes.icon.container} ${iconBackgroundClass}`}>
          <div className={classes.icon.icon}>{icon}</div>
        </div>
      </div>
      <div className="ml-4">
        <h3 className={titleClasses}>{title}</h3>
        <p className={descriptionClasses}>{description}</p>
      </div>
    </div>
  );

  if (isClickable) {
    return (
      <Link to={to} className={`${classes.base} ${classes.clickable}`}>
        {content}
      </Link>
    );
  }

  return <div className={`${classes.base} ${classes.disabled}`}>{content}</div>;
};
