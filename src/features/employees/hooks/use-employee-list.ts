import { useQuery } from '@tanstack/react-query';

import type { GetApiEmployeesParams } from '@/api';
import { employeeService } from '@/api';

/**
 * Cache configuration
 */
export const EMPLOYEE_LIST_CACHE_TIME = 5 * 60 * 1000; // 5 minutes
const EMPLOYEE_LIST_RETRY_COUNT = 1;

/**
 * Employee list query key factory
 */
const employeeListKeys = {
  all: ['employees'] as const,
  lists: () => [...employeeListKeys.all, 'list'] as const,
  list: (params: GetApiEmployeesParams) =>
    [...employeeListKeys.lists(), params] as const,
};

/**
 * Hook for fetching employee list with filters
 *
 * @param params - Query parameters (search, orderBy, pagination)
 * @returns React Query result with employee data
 *
 * @example
 * ```tsx
 * const { data, isLoading, error } = useEmployeeList({
 *   Search: 'John',
 *   OrderBy: 'firstName',
 *   Limit: 10,
 *   Offset: 0,
 * });
 * ```
 */
export const useEmployeeList = (params: GetApiEmployeesParams = {}) => {
  return useQuery({
    queryKey: employeeListKeys.list(params),
    queryFn: () => employeeService.getAll(params),
    staleTime: EMPLOYEE_LIST_CACHE_TIME,
    retry: EMPLOYEE_LIST_RETRY_COUNT,
  });
};

/**
 * Export query keys for manual cache invalidation
 */
export { employeeListKeys };
