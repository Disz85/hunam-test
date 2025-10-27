import { type ComponentProps, forwardRef } from 'react';

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
 * Styled select dropdown with error state handling.
 * Can render options automatically via `options` prop or use children.
 *
 * @example
 * ```tsx
 * // With array options
 * <FormSelect
 *   options={[
 *     { value: 1, label: 'Male' },
 *     { value: 2, label: 'Female' }
 *   ]}
 *   placeholder="Select sex"
 *   {...register('sex')}
 * />
 *
 * // With enum labels (Record)
 * <FormSelect
 *   options={SexLabels}
 *   placeholder="Select sex"
 *   {...register('sex')}
 * />
 *
 * // With children (manual)
 * <FormSelect {...register('sex')}>
 *   <option value="">Select sex</option>
 *   <option value="1">Male</option>
 * </FormSelect>
 * ```
 */
export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      hasError = false,
      className = '',
      options,
      placeholder,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2';
    const errorClasses = hasError
      ? 'outline-red-300 focus:outline-red-500'
      : 'outline-gray-300 focus:outline-indigo-600';

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
      <select
        ref={ref}
        className={`${baseClasses} ${errorClasses} ${className}`}
        aria-invalid={hasError}
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
      </select>
    );
  }
);
