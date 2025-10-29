/**
 * UI Button component module
 *
 * @module components/ui/button/button
 */

import { Button as HeadlessButton } from '@headlessui/react';
import { type ComponentProps, type ReactNode } from 'react';

import { cn } from '@/lib/cn';

import { Spinner } from '../loading/spinner';

/**
 * Button variant types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
/**
 * Button size types
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button component props
 */
type ButtonProps = {
  /** Button style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Show loading spinner and disable button */
  isLoading?: boolean;
  /** Text to display while loading */
  loadingText?: string;
  /** Button content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
} & Omit<ComponentProps<typeof HeadlessButton>, 'className'>;

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 disabled:bg-indigo-400',
  secondary:
    'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-gray-500 disabled:bg-gray-100',
  danger:
    'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600 disabled:bg-red-400',
  success:
    'bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600 disabled:bg-green-400',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-2.5 py-1.5 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-sm',
};

/**
 * General button component with variants and loading state
 *
 * A versatile button component built on Headless UI Button with multiple variants,
 * sizes, and loading state support. Automatically shows a spinner when loading.
 *
 * @param {ButtonProps} props - Component props
 *
 * @example
 * ```tsx
 * import { Button } from '@/components/ui/button/button';
 *
 * // Basic usage
 * <Button onClick={handleClick}>Click me</Button>
 *
 * // With variant and size
 * <Button variant="primary" size="lg">Save</Button>
 *
 * // With loading state
 * <Button isLoading={saving} loadingText="Saving...">
 *   Save Changes
 * </Button>
 * ```
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const displayText = isLoading && loadingText ? loadingText : children;

  return (
    <HeadlessButton
      disabled={disabled || isLoading}
      className={cn(
        BASE_CLASSES,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {isLoading && <Spinner size="sm" variant="secondary" />}
      {displayText}
    </HeadlessButton>
  );
};
