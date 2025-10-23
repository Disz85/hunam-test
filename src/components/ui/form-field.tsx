import { Field, Label } from '@headlessui/react';
import { type ReactNode } from 'react';

/**
 * FormField props
 */
type FormFieldProps = {
  label: string;
  children: ReactNode;
  required?: boolean;
};

/**
 * FormField component
 *
 * Wraps Field + Label for consistent form field styling
 */
export const FormField = ({
  label,
  children,
  required = false,
}: FormFieldProps) => {
  return (
    <Field>
      <Label className="block text-sm/6 font-semibold text-gray-900">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <div className="mt-2.5">{children}</div>
    </Field>
  );
};
