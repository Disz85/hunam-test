/**
 * Environment configuration module
 *
 * @module config/env
 */

import { z } from 'zod';

/**
 * Environment variables schema
 *
 * Defines the structure and validation rules for application environment variables.
 * Uses Zod for runtime validation with fail-fast error handling.
 */
const EnvSchema = z.object({
  /** API base URL - must be a valid URL */
  VITE_API_BASE_URL: z.string().url(),
});

/**
 * Validated environment configuration
 *
 * Parsed and validated at application startup.
 * Throws an error if any required variables are missing or invalid.
 *
 * @example
 * ```typescript
 * import { ENV } from '@/config/env';
 *
 * console.log(ENV.VITE_API_BASE_URL);
 * ```
 */
export const ENV = EnvSchema.parse(import.meta.env);
