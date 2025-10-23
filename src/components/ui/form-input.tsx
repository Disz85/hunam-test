import { type ComponentProps, forwardRef } from 'react';

/**
 * FormInput props
 */
type FormInputProps = ComponentProps<'input'> & {
  hasError?: boolean;
  'aria-describedby'?: string;
};

/**
 * FormInput component
 *
 * Styled input with error state handling
 */
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      hasError = false,
      className = '',
      'aria-describedby': ariaDescribedby,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2';
    const errorClasses = hasError
      ? 'outline-red-300 focus:outline-red-500'
      : 'outline-gray-300 focus:outline-indigo-600';

    return (
      <input
        ref={ref}
        className={`${baseClasses} ${errorClasses} ${className}`}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedby}
        {...props}
      />
    );
  }
);
