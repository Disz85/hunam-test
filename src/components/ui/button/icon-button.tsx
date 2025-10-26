import { Button } from '@headlessui/react';
import type { ComponentProps, ReactElement } from 'react';

type IconButtonProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  variant?: 'primary' | 'danger' | 'default';
} & ComponentProps<typeof Button>;

/**
 * Icon button component
 *
 * Simple icon button with variants for different use cases
 */
export const IconButton = ({
  icon: Icon,
  label,
  variant = 'default',
  className = '',
  ...props
}: IconButtonProps): ReactElement => {
  const variants = {
    primary:
      'text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 focus-visible:outline-indigo-600',
    danger:
      'text-red-600 hover:text-red-800 hover:bg-red-50 focus-visible:outline-red-600',
    default:
      'text-gray-600 hover:text-gray-800 hover:bg-gray-50 focus-visible:outline-gray-600',
  };

  const baseClasses =
    'inline-flex items-center justify-center rounded-md p-2 text-sm font-semibold cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <Button
      {...props}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      aria-label={label}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </Button>
  );
};
