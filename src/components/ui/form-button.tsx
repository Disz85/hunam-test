import { Button } from '@headlessui/react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { type ComponentProps, type ReactNode } from 'react';

/**
 * FormButton props
 */
type FormButtonProps = ComponentProps<typeof Button> & {
  isLoading?: boolean;
  loadingText?: string;
  children: ReactNode;
};

/**
 * FormButton component
 *
 * Styled button with loading state and spinner
 */
export const FormButton = ({
  isLoading = false,
  loadingText = 'Loading...',
  children,
  className = '',
  disabled,
  ...props
}: FormButtonProps) => {
  const baseClasses =
    'flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-400';

  return (
    <Button
      disabled={disabled || isLoading}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {isLoading ? loadingText : children}
      {isLoading && <ArrowPathIcon className="h-5 w-5 animate-spin" />}
    </Button>
  );
};
