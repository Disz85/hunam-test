/**
 * Employee hooks module
 *
 * @module features/employees/hooks/use-employee
 */

import { useQuery } from '@tanstack/react-query';

import { employeeService } from '@/api/employees';

import { employeeQueryKeys } from '../domain/query-keys/employee-query-keys';

/**
 * Cache configuration
 *
 * Defines how long employee data should be considered fresh in the cache.
 */
export const EMPLOYEE_CACHE_TIME = 5 * 60 * 1000; // 5 minutes
const EMPLOYEE_RETRY_COUNT = 1;

/**
 * Hook for fetching single employee by ID
 *
 * Fetches employee details from the API with automatic caching.
 * The query is automatically disabled if no ID is provided.
 *
 * @param {number | undefined} id - Employee ID to fetch (undefined to disable query)
 * @returns {UseQueryResult<EmployeeDto>} React Query result with employee data, loading state, and error
 *
 * @example
 * ```tsx
 * import { useEmployee } from '@/features/employees/hooks/use-employee';
 *
 * const { data: employee, isLoading, error } = useEmployee(employeeId);
 *
 * if (isLoading) return <Loading />;
 * if (error) return <Error />;
 * return <EmployeeDetails employee={employee} />;
 * ```
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
