import { Button } from '@headlessui/react';

import { FormButton } from '@/components/ui/form/form-button';

/**
 * Props for the EmployeeFormActions component
 */
export type EmployeeFormActionsProps = {
  onCancel: () => void;
  isLoading: boolean;
  isEdit: boolean;
};

/**
 * EmployeeFormActions component
 *
 * Renders the cancel and submit buttons
 */
export const EmployeeFormActions = ({
  onCancel,
  isLoading,
  isEdit,
}: EmployeeFormActionsProps) => (
  <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-6">
    <Button
      type="button"
      onClick={onCancel}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      Cancel
    </Button>
    <FormButton type="submit" isLoading={isLoading} disabled={isLoading}>
      {isEdit ? 'Update Employee' : 'Create Employee'}
    </FormButton>
  </div>
);
