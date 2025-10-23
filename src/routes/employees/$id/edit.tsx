import { createFileRoute } from '@tanstack/react-router';

import { EmployeeEditPage } from '@/features/employees/pages/employee-edit-page';

/**
 * Edit employee route
 *
 * Dynamic route parameter: $id
 */
export const Route = createFileRoute('/employees/$id/edit')({
  component: function EmployeeEditPageWrapper() {
    const params = Route.useParams() as unknown as { id: string };
    const id = params.id;

    if (typeof id !== 'string' || id.length === 0) {
      throw new Error('Invalid employee ID');
    }

    return <EmployeeEditPage id={id} />;
  },
});
