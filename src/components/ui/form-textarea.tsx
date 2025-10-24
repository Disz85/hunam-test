import { Textarea } from '@headlessui/react';
import { type ComponentProps, forwardRef } from 'react';

/**
 * FormTextarea props
 */
type FormTextareaProps = ComponentProps<typeof Textarea> & {
  hasError?: boolean;
};

/**
 * FormTextarea component
 *
 * Styled textarea with error state handling using Headless UI Textarea
 */
export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ hasError = false, className = '', ...props }, ref) => {
    const baseClasses =
      'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2';
    const errorClasses = hasError
      ? 'outline-red-300 focus:outline-red-500'
      : 'outline-gray-300 focus:outline-indigo-600';

    return (
      <Textarea
        ref={ref}
        className={`${baseClasses} ${errorClasses} ${className}`}
        aria-invalid={hasError}
        {...props}
      />
    );
  }
);

FormTextarea.displayName = 'FormTextarea';
