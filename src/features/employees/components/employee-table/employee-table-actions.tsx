import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@tanstack/react-router';

import type { EmployeeDto } from '@/api/__generated__/api.schemas';
import { IconButton } from '@/components/ui/button/icon-button';

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

  const handleEdit = () => {
    void navigate({
      to: '/admin/employees/$id/edit',
      params: { id: String(employee.id) },
    });
  };

  const handleDelete = () => {};

  return (
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
  );
};
