import { Input } from '@headlessui/react';
import { type ComponentProps, forwardRef } from 'react';

import { cn } from '@/lib/cn';

import {
  FORM_BASE_STYLES,
  FORM_PLACEHOLDER_STYLES,
  getFormErrorClasses,
} from './form-styles';

/**
 * FormInput props
 */
type FormInputProps = ComponentProps<'input'> & {
  hasError?: boolean;
};

/**
 * FormInput component
 *
 * Styled input with error state handling using Headless UI Input
 */
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ hasError = false, className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        className={cn(
          FORM_BASE_STYLES,
          FORM_PLACEHOLDER_STYLES,
          getFormErrorClasses(hasError),
          className
        )}
        aria-invalid={hasError}
        {...props}
      />
    );
  }
);
