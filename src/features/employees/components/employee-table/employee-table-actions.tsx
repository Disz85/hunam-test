import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import type { EmployeeDto } from '@/api/__generated__/api.schemas';
import { IconButton } from '@/components/ui/button/icon-button';

import { useDeleteEmployee } from '../../hooks/use-delete-employee';
import { DeleteEmployeeModal } from './delete-employee-modal';

type EmployeeTableActionsProps = {
  employee: EmployeeDto;
};

/**
 * Employee table actions component
 *
 * Renders edit and delete action buttons for each employee row
 */
export const EmployeeTableActions = ({
  employee,
}: EmployeeTableActionsProps) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteMutation = useDeleteEmployee();

  const handleEdit = () => {
    void navigate({
      to: '/admin/employees/$id/edit',
      params: { id: String(employee.id) },
    });
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!employee.id) {
      return;
    }

    void deleteMutation.mutateAsync(employee.id).then(() => {
      setIsDeleteModalOpen(false);
    });
  };

  const handleCloseModal = () => {
    if (!deleteMutation.isPending) {
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-end gap-x-2">
        <IconButton
          icon={PencilIcon}
          label="Edit"
          variant="primary"
          onClick={handleEdit}
        />
        <IconButton
          icon={TrashIcon}
          label="Delete"
          variant="danger"
          onClick={handleDelete}
        />
      </div>

      <DeleteEmployeeModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        employee={employee}
        isDeleting={deleteMutation.isPending}
      />
    </>
  );
};
