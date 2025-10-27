import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import type { EmployeeDto } from '@/api';

import { EmployeeTableActions } from './employee-table-actions';

type EmployeeTableCardProps = {
  employee: EmployeeDto;
};

type FieldConfig = {
  label: string;
  getValue: (employee: EmployeeDto) => string | null | undefined;
  isVisible?: (employee: EmployeeDto) => boolean;
};

/**
 * Field configuration for employee details
 * Makes it easy to add/remove/reorder fields
 */
const useFieldConfig = (): FieldConfig[] => {
  const { t } = useTranslation('common');

  return [
    {
      label: t('fields.email'),
      getValue: employee => employee.email,
      isVisible: employee => !!employee.email,
    },
    {
      label: t('fields.phoneNumber'),
      getValue: employee => employee.phone,
      isVisible: employee => !!employee.phone,
    },
  ];
};

/**
 * Card Header - Employee name and actions
 */
const CardHeader = ({ employee }: { employee: EmployeeDto }) => (
  <div className="flex items-start justify-between gap-x-3">
    <h3 className="text-base font-semibold leading-tight text-gray-900">
      {employee.firstName} {employee.lastName}
    </h3>
    <EmployeeTableActions employee={employee} />
  </div>
);

/**
 * Field Item - Single detail field
 */
type FieldItemProps = {
  label: string;
  value: ReactNode;
};

const FieldItem = ({ label, value }: FieldItemProps) => (
  <div className="flex items-start gap-x-3">
    <dt className="w-16 flex-shrink-0 text-xs font-medium uppercase tracking-wide text-gray-500">
      {label}
    </dt>
    <dd className="flex-1 text-sm text-gray-900">{value}</dd>
  </div>
);

/**
 * Card Details - Employee information fields
 */
const CardDetails = ({ employee }: { employee: EmployeeDto }) => {
  const fieldConfig = useFieldConfig();

  const visibleFields = fieldConfig.filter(
    field => !field.isVisible || field.isVisible(employee)
  );

  if (visibleFields.length === 0) {
    return null;
  }

  return (
    <dl className="space-y-2">
      {visibleFields.map(field => (
        <FieldItem
          key={field.label}
          label={field.label}
          value={field.getValue(employee)}
        />
      ))}
    </dl>
  );
};

/**
 * Employee Card Component (Mobile View)
 *
 * Displays a single employee as a card with key information.
 * Composed of smaller, focused components for better maintainability.
 *
 * @example
 * ```tsx
 * <EmployeeTableCard employee={employee} />
 * ```
 */
export const EmployeeTableCard = ({ employee }: EmployeeTableCardProps) => (
  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
    <div className="px-4 py-4">
      <CardHeader employee={employee} />
      <CardDetails employee={employee} />
    </div>
  </div>
);
