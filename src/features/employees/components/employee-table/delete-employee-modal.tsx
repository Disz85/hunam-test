import { useTranslation } from 'react-i18next';

import type { EmployeeDto } from '@/api';
import { ConfirmationModal } from '@/components/ui/modal/confirmation-modal';

type DeleteEmployeeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  employee: EmployeeDto | null;
  isDeleting: boolean;
};

/**
 * Delete employee confirmation modal
 *
 * Wraps the general ConfirmationModal with employee-specific content
 */
export const DeleteEmployeeModal = ({
  isOpen,
  onClose,
  onConfirm,
  employee,
  isDeleting,
}: DeleteEmployeeModalProps) => {
  const { t } = useTranslation('common');

  if (!employee) {
    return null;
  }

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title={t('modals.deleteEmployee')}
      description={
        <div className="space-y-2 text-sm">
          <p className="text-gray-500">
            {t('modals.deleteEmployeeConfirm')}{' '}
            <span className="font-medium text-gray-900">
              {employee.firstName} {employee.lastName}
            </span>
            ?
          </p>
          <p className="font-semibold text-red-600">
            {t('modals.deleteEmployeeWarning')}
          </p>
        </div>
      }
      confirmText={t('form.delete')}
      cancelText={t('cancel')}
      variant="danger"
      isLoading={isDeleting}
      loadingText={t('modals.deleting')}
    />
  );
};
