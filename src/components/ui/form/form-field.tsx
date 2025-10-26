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
  const colSpanClass = colSpan
    ? colSpan === 'full'
      ? 'sm:col-span-6'
      : `sm:col-span-${colSpan}`
    : '';

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
