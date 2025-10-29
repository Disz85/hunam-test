/**
 * Delete employee hooks module
 *
 * @module features/employees/hooks/use-delete-employee
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { employeeService } from '@/api/employees';

import { employeeQueryKeys } from '../domain/query-keys/employee-query-keys';

/**
 * Hook for deleting an employee
 *
 * Provides mutation functionality for deleting an employee.
 * Automatically invalidates employee queries after successful deletion.
 *
 * @returns {UseMutationResult<EmployeeDto, Error, number>} React Query mutation for employee deletion
 *
 * @example
 * ```tsx
 * import { useDeleteEmployee } from '@/features/employees/hooks/use-delete-employee';
 *
 * const deleteMutation = useDeleteEmployee();
 *
 * const handleDelete = (id: number) => {
 *   deleteMutation.mutate(id);
 * };
 * ```
 */
export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => employeeService.delete(id),
    onSuccess: () => {
      // Invalidate all employee queries (both lists and details)
      void queryClient.invalidateQueries({
        queryKey: employeeQueryKeys.all,
      });
    },
  });
};
