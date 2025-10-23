import { z } from 'zod';

/**
 * Search params schema for employee list
 *
 * Validates URL search parameters for filtering, pagination, and sorting
 */
export const employeeListSearchSchema = z.object({
  search: z.string().optional(),
  page: z.number().int().positive().optional(),
  limit: z.number().int().positive().optional(),
  orderBy: z.string().optional(),
});

/**
 * Infer search params type from schema
 */
export type EmployeeListSearch = z.infer<typeof employeeListSearchSchema>;
