import { createFileRoute } from '@tanstack/react-router';

import { RouterHelpers } from '@/lib';
import { EmployeeEditPage } from '@/pages/employee-edit-page';

/**
 * Edit employee route - dynamic parameter: $id
 */
export const Route = createFileRoute('/employees/$id/edit')({
  component: function EmployeeEditPageWrapper() {
    const { id } = RouterHelpers.getRouteParams<{ id: string }>(
      Route.useParams()
    );

    if (typeof id !== 'string' || id.length === 0) {
      throw new Error('Invalid employee ID');
    }

    return <EmployeeEditPage id={id} />;
  },
});
