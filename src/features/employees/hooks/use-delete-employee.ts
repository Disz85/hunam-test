import { useMutation, useQueryClient } from '@tanstack/react-query';

import { employeeService } from '@/api/employees';

import { employeeListKeys } from './use-employee-list';

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
      // Invalidate all employee lists to refetch data
      void queryClient.invalidateQueries({
        queryKey: employeeListKeys.lists(),
      });
    },
  });
};
