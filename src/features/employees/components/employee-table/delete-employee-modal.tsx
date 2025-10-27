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
  if (!employee) {
    return null;
  }

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title="Delete Employee"
      description={
        <div className="space-y-2 text-sm">
          <p className="text-gray-500">
            Are you sure you want to delete{' '}
            <span className="font-medium text-gray-900">
              {employee.firstName} {employee.lastName}
            </span>
            ?
          </p>
          <p className="font-semibold text-red-600">
            This action cannot be undone.
          </p>
        </div>
      }
      confirmText="Delete"
      cancelText="Cancel"
      variant="danger"
      isLoading={isDeleting}
      loadingText="Deleting..."
    />
  );
};
