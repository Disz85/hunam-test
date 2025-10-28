import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

export type PaginationButtonVariant = 'page' | 'nav' | 'ellipsis';
export type PaginationButtonPosition = 'left' | 'right' | 'middle';

type PaginationButtonProps = {
  variant: PaginationButtonVariant;
  position?: PaginationButtonPosition;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  ariaLabel?: string;
};

const BASE_CLASSES =
  'relative inline-flex items-center text-sm font-semibold focus:z-20';

const VARIANT_CLASSES: Record<PaginationButtonVariant, string> = {
  page: 'px-4 py-2',
  nav: 'px-2 py-2 ring-1 ring-inset ring-gray-300 focus:outline-offset-0',
  ellipsis: 'px-4 py-2 text-gray-700 ring-1 ring-inset ring-gray-300',
};

const STATE_CLASSES = {
  active:
    'z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer',
  inactive:
    'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 cursor-pointer',
  navEnabled: 'text-gray-400 hover:bg-gray-50 cursor-pointer',
  navDisabled: 'cursor-not-allowed text-gray-300',
};

const POSITION_CLASSES: Record<PaginationButtonPosition, string> = {
  left: 'rounded-l-md',
  right: 'rounded-r-md',
  middle: '',
};

/**
 * Pagination Button Component
 *
 * Unified button for page numbers, navigation, and ellipsis
 */
export const PaginationButton = ({
  variant,
  position = 'middle',
  isActive = false,
  disabled = false,
  onClick,
  children,
  ariaLabel,
}: PaginationButtonProps) => {
  const isNav = variant === 'nav';
  const isEllipsis = variant === 'ellipsis';

  if (isEllipsis) {
    return (
      <span
        className={cn(BASE_CLASSES, VARIANT_CLASSES.ellipsis)}
        aria-hidden="true"
      >
        {children}
      </span>
    );
  }

  const classes = cn(
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    POSITION_CLASSES[position],
    isNav
      ? disabled
        ? STATE_CLASSES.navDisabled
        : STATE_CLASSES.navEnabled
      : isActive
        ? STATE_CLASSES.active
        : STATE_CLASSES.inactive
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      className={classes}
    >
      {children}
    </button>
  );
};

/**
 * Navigation Icons
 */
export const PrevIcon = () => {
  // Note: Translations are handled in pagination.tsx where these icons are used
  return (
    <>
      <span className="sr-only">Previous</span>
      <ChevronLeftIcon aria-hidden="true" className="size-5" />
    </>
  );
};

export const NextIcon = () => {
  // Note: Translations are handled in pagination.tsx where these icons are used
  return (
    <>
      <span className="sr-only">Next</span>
      <ChevronRightIcon aria-hidden="true" className="size-5" />
    </>
  );
};
