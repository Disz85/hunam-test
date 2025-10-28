import { Fieldset, Legend } from '@headlessui/react';
import type { ComponentType, ReactNode } from 'react';

/**
 * FormSection props
 */
type FormSectionProps = {
  title: string;
  description?: string;
  icon?: ComponentType<{ className?: string }>;
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
  icon: Icon,
  children,
}: FormSectionProps) => {
  return (
    <Fieldset>
      <Legend className="flex items-center gap-2 text-base font-semibold leading-7 text-gray-900">
        {Icon && <Icon className="h-5 w-5 text-indigo-600" />}
        {title}
      </Legend>
      {description && (
        <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
      )}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        {children}
      </div>
    </Fieldset>
  );
};
