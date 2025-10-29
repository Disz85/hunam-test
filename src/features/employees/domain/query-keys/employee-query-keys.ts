/**
 * Employee domain query keys module
 *
 * @module features/employees/domain/query-keys/employee-query-keys
 */

import type { GetApiEmployeesParams } from '@/api';

/**
 * Centralized employee query key factory
 *
 * Following React Query best practices for key organization:
 * - all: ['employees'] - base key for all employee queries
 * - lists: ['employees', 'list'] - all list queries
 * - list: ['employees', 'list', params] - specific list with filters
 * - details: ['employees', 'detail'] - all detail queries
 * - detail: ['employees', 'detail', id] - specific employee detail
 *
 * @see {@link https://tanstack.com/query/latest/docs/react/guides/query-keys#query-key-factories}
 *
 * @example
 * ```typescript
 * import { employeeQueryKeys } from '@/features/employees/domain/query-keys/employee-query-keys';
 *
 * // Invalidate all employee queries
 * queryClient.invalidateQueries({ queryKey: employeeQueryKeys.all });
 *
 * // Invalidate specific employee detail
 * queryClient.invalidateQueries({ queryKey: employeeQueryKeys.detail(123) });
 * ```
 */
export const employeeQueryKeys = {
  all: ['employees'] as const,
  lists: () => [...employeeQueryKeys.all, 'list'] as const,
  list: (params: GetApiEmployeesParams) =>
    [...employeeQueryKeys.lists(), params] as const,
  details: () => [...employeeQueryKeys.all, 'detail'] as const,
  detail: (id: number) => [...employeeQueryKeys.details(), id] as const,
  disabled: [...(['employees', 'detail', 'disabled'] as const)],
};
