import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

type DashboardCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  to?: string;
  disabled?: boolean;
};

const BASE_CARD_CLASSES = 'rounded-lg border border-gray-200 p-6';
const CLICKABLE_CARD_CLASSES =
  'group bg-white shadow-sm transition-all hover:border-indigo-300 hover:shadow-md';
const DISABLED_CARD_CLASSES = 'bg-gray-50';

const ICON_CONTAINER_CLASSES =
  'flex h-8 w-8 items-center justify-center rounded-md';
const ICON_BACKGROUND_ACTIVE_CLASSES =
  'bg-indigo-600 transition-colors group-hover:bg-indigo-700';
const ICON_BACKGROUND_DISABLED_CLASSES = 'bg-gray-400';
const ICON_CLASSES = 'h-5 w-5 text-white';

const TITLE_ACTIVE_CLASSES =
  'text-lg font-medium text-gray-900 transition-colors group-hover:text-indigo-600';
const TITLE_DISABLED_CLASSES = 'text-lg font-medium text-gray-500';

const DESCRIPTION_ACTIVE_CLASSES = 'text-sm text-gray-500';
const DESCRIPTION_DISABLED_CLASSES = 'text-sm text-gray-400';

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

  const content = (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div
          className={cn(
            ICON_CONTAINER_CLASSES,
            disabled
              ? ICON_BACKGROUND_DISABLED_CLASSES
              : ICON_BACKGROUND_ACTIVE_CLASSES
          )}
        >
          <div className={ICON_CLASSES}>{icon}</div>
        </div>
      </div>
      <div className="ml-4">
        <h3
          className={disabled ? TITLE_DISABLED_CLASSES : TITLE_ACTIVE_CLASSES}
        >
          {title}
        </h3>
        <p
          className={
            disabled ? DESCRIPTION_DISABLED_CLASSES : DESCRIPTION_ACTIVE_CLASSES
          }
        >
          {description}
        </p>
      </div>
    </div>
  );

  if (isClickable) {
    return (
      <Link to={to} className={cn(BASE_CARD_CLASSES, CLICKABLE_CARD_CLASSES)}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cn(BASE_CARD_CLASSES, DISABLED_CARD_CLASSES)}>
      {content}
    </div>
  );
};
