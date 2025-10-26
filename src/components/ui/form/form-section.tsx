import type { ReactNode } from 'react';

/**
 * FormSection props
 */
type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

/**
 * FormSection component
 *
 * Provides consistent section structure with title and optional description
 */
export const FormSection = ({
  title,
  description,
  children,
}: FormSectionProps) => {
  return (
    <fieldset>
      <legend className="text-base font-semibold leading-7 text-gray-900">
        {title}
      </legend>
      {description && (
        <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
      )}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        {children}
      </div>
    </fieldset>
  );
};
