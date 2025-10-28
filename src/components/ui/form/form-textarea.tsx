import { Textarea } from '@headlessui/react';
import { type ComponentProps, forwardRef } from 'react';

import { cn } from '@/lib/cn';

import {
  FORM_BASE_STYLES,
  FORM_PLACEHOLDER_STYLES,
  getFormErrorClasses,
} from './form-styles';

/**
 * FormTextarea props
 */
type FormTextareaProps = Omit<ComponentProps<'textarea'>, 'ref'> & {
  hasError?: boolean;
};

/**
 * FormTextarea component
 *
 * Styled textarea with error state handling using Headless UI Textarea
 */
export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ hasError = false, className, ...props }, ref) => {
    return (
      <Textarea
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
