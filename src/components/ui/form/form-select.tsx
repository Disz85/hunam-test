import { Select } from '@headlessui/react';
import { type ComponentProps, forwardRef } from 'react';

import { cn } from '@/lib/cn';

import { FORM_BASE_STYLES, getFormErrorClasses } from './form-styles';

/**
 * Option type for select dropdowns
 */
export type SelectOption = {
  value: string | number;
  label: string;
};

/**
 * FormSelect props
 */
type FormSelectProps = ComponentProps<'select'> & {
  hasError?: boolean;
  options?: SelectOption[] | Record<string | number, string>;
  placeholder?: string;
};

/**
 * FormSelect component
 *
 * Styled select dropdown with error state handling using Headless UI Select.
 * Can render options automatically via `options` prop or use children.
 *
 * Uses Headless UI Select component for better accessibility and state management.
 */
export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    { hasError = false, className, options, placeholder, children, ...props },
    ref
  ) => {
    // Convert options to array if it's a Record
    const optionsArray: SelectOption[] | undefined = options
      ? Array.isArray(options)
        ? options
        : Object.entries(options).map(([value, label]) => ({
            value: Number(value),
            label,
          }))
      : undefined;

    return (
      <Select
        ref={ref}
        invalid={hasError}
        className={cn(
          FORM_BASE_STYLES,
          getFormErrorClasses(hasError),
          className
        )}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {optionsArray
          ? optionsArray.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          : children}
      </Select>
    );
  }
);
