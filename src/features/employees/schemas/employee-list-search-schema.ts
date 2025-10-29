/**
 * Employee schemas module
 *
 * @module features/employees/schemas/employee-list-search-schema
 */

import { z } from 'zod';

/**
 * Search params schema for employee list
 *
 * Validates URL search parameters for filtering, pagination, and sorting.
 * Used to validate query parameters from the URL.
 *
 * @example
 * ```typescript
 * import { employeeListSearchSchema } from '@/features/employees/schemas/employee-list-search-schema';
 *
 * const params = employeeListSearchSchema.parse({
 *   search: 'John',
 *   page: 1,
 *   limit: 10,
 *   orderBy: 'firstName'
 * });
 * ```
 */
export const employeeListSearchSchema = z.object({
  search: z.string().optional(),
  page: z.number().int().positive().optional(),
  limit: z.number().int().positive().optional(),
  orderBy: z.string().optional(),
});

/**
 * Employee list search params type
 *
 * TypeScript type inferred from the validation schema.
 */
export type EmployeeListSearch = z.infer<typeof employeeListSearchSchema>;
