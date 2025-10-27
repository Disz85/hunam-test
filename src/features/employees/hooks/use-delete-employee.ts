import { useMutation, useQueryClient } from '@tanstack/react-query';

import { employeeService } from '@/api/employees';

import { employeeQueryKeys } from '../domain/query-keys/employee-query-keys';

/**
 * Hook for deleting an employee
 *
 * @returns React Query mutation for employee deletion
 *
 * @example
 * ```tsx
 * const deleteMutation = useDeleteEmployee();
 * deleteMutation.mutate(employeeId);
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
