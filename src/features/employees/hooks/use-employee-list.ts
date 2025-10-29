/**
 * Employee list hooks module
 *
 * @module features/employees/hooks/use-employee-list
 */

import { useQuery } from '@tanstack/react-query';

import type { GetApiEmployeesParams } from '@/api';
import { employeeService } from '@/api';

import { employeeQueryKeys } from '../domain/query-keys/employee-query-keys';

/**
 * Cache configuration
 *
 * Defines how long employee list data should be considered fresh in the cache.
 */
export const EMPLOYEE_LIST_CACHE_TIME = 5 * 60 * 1000; // 5 minutes
const EMPLOYEE_LIST_RETRY_COUNT = 1;

/**
 * Hook for fetching employee list with filters
 *
 * Fetches a paginated list of employees from the API with optional search and sorting.
 * Supports caching and automatic refetching.
 *
 * @param {GetApiEmployeesParams} [params={}] - Query parameters for filtering and pagination
 * @returns {UseQueryResult<EmployeeDtoPagination>} React Query result with employee list data, loading state, and error
 *
 * @example
 * ```tsx
 * import { useEmployeeList } from '@/features/employees/hooks/use-employee-list';
 *
 * // Basic usage
 * const { data, isLoading, error } = useEmployeeList();
 *
 * // With filters and pagination
 * const { data, isLoading } = useEmployeeList({
 *   search: 'John',
 *   orderBy: 'firstName',
 *   page: 1,
 *   pageSize: 10,
 * });
 * ```
 */
export const useEmployeeList = (params: GetApiEmployeesParams = {}) => {
  return useQuery({
    queryKey: employeeQueryKeys.list(params),
    queryFn: () => employeeService.getAll(params),
    staleTime: EMPLOYEE_LIST_CACHE_TIME,
    retry: EMPLOYEE_LIST_RETRY_COUNT,
  });
};
