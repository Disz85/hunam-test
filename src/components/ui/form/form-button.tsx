import { Button } from '@headlessui/react';
import { type ComponentProps, type ReactNode } from 'react';

import { cn } from '@/lib/cn';

import { Spinner } from '../loading/spinner';

/**
 * FormButton props
 */
type FormButtonProps = {
  isLoading?: boolean;
  loadingText?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Button>, 'className'>;

const BASE_CLASSES =
  'flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-400';

/**
 * FormButton component
 *
 * Styled button with loading state and spinner
 */
export const FormButton = ({
  isLoading = false,
  loadingText = 'Loading...',
  children,
  className,
  disabled,
  ...props
}: FormButtonProps) => {
  return (
    <Button
      disabled={disabled || isLoading}
      className={cn(BASE_CLASSES, className)}
      {...props}
    >
      {isLoading && <Spinner size="sm" variant="secondary" />}
      {isLoading ? loadingText : children}
    </Button>
  );
};
