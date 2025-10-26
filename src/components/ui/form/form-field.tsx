import { Field, Label } from '@headlessui/react';
import { type ReactNode } from 'react';

/**
 * FormField props
 */
type FormFieldProps = {
  label: string;
  children: ReactNode;
  required?: boolean;
  colSpan?: number | 'full';
};

/**
 * Column span class mapping
 * Note: Tailwind requires explicit class names for purging
 */
const colSpanClasses: Record<number | 'full', string> = {
  1: 'sm:col-span-1',
  2: 'sm:col-span-2',
  3: 'sm:col-span-3',
  4: 'sm:col-span-4',
  5: 'sm:col-span-5',
  6: 'sm:col-span-6',
  full: 'sm:col-span-6',
};

/**
 * FormField component
 *
 * Wraps Field + Label for consistent form field styling with optional grid column span
 */
export const FormField = ({
  label,
  children,
  required = false,
  colSpan,
}: FormFieldProps) => {
  const colSpanClass = colSpan ? colSpanClasses[colSpan] || '' : '';

  return (
    <div className={colSpanClass}>
      <Field>
        <Label className="block text-sm/6 font-semibold text-gray-900">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <div className="mt-2.5">{children}</div>
      </Field>
    </div>
  );
};
