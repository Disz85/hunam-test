import { CheckIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

import { FormButton } from '@/components/ui/form/form-button';

/**
 * Props for the EmployeeFormActions component
 */
export type EmployeeFormActionsProps = {
  isLoading: boolean;
  isEdit: boolean;
};

/**
 * EmployeeFormActions component
 *
 * Renders submit button at the end of the form
 */
export const EmployeeFormActions = ({
  isLoading,
  isEdit,
}: EmployeeFormActionsProps) => {
  const { t } = useTranslation('employees');

  return (
    <div className="flex sm:w-auto">
      <FormButton
        type="submit"
        isLoading={isLoading}
        loadingText={isEdit ? t('updating') : t('creating')}
        className="w-full sm:w-auto sm:min-w-[160px]"
      >
        <CheckIcon className="size-5" aria-hidden="true" />
        <span>{isEdit ? t('update') : t('create')}</span>
      </FormButton>
    </div>
  );
};
