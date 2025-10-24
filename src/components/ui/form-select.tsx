import { type ComponentProps, forwardRef } from 'react';

/**
 * FormSelect props
 */
type FormSelectProps = ComponentProps<'select'> & {
  hasError?: boolean;
};

/**
 * FormSelect component
 *
 * Styled select dropdown with error state handling
 */
export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ hasError = false, className = '', ...props }, ref) => {
    const baseClasses =
      'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2';
    const errorClasses = hasError
      ? 'outline-red-300 focus:outline-red-500'
      : 'outline-gray-300 focus:outline-indigo-600';

    return (
      <select
        ref={ref}
        className={`${baseClasses} ${errorClasses} ${className}`}
        aria-invalid={hasError}
        {...props}
      />
    );
  }
);

FormSelect.displayName = 'FormSelect';
