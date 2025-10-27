import { useQuery } from '@tanstack/react-query';

import { employeeService } from '@/api/employees';

import { employeeQueryKeys } from '../domain/query-keys/employee-query-keys';

/**
 * Cache configuration
 */
export const EMPLOYEE_CACHE_TIME = 5 * 60 * 1000; // 5 minutes
const EMPLOYEE_RETRY_COUNT = 1;

/**
 * Hook for fetching single employee by ID
 *
 * @param id - Employee ID (undefined if query should be disabled)
 * @returns React Query result with employee data
 */
export const useEmployee = (id: number | undefined) => {
  const isEnabled = id !== undefined;

  return useQuery({
    queryKey: isEnabled
      ? employeeQueryKeys.detail(id)
      : employeeQueryKeys.disabled,
    queryFn: () => employeeService.getById(id!),
    enabled: isEnabled,
    staleTime: EMPLOYEE_CACHE_TIME,
    retry: EMPLOYEE_RETRY_COUNT,
  });
};
