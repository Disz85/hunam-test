import { z } from 'zod';

/**
 * Environment variables schema and validated ENV object.
 *
 * Validates required variables at startup (fail-fast) to avoid
 * misconfiguration issues at runtime.
 */

const EnvSchema = z.object({
  VITE_API_BASE_URL: z.string().url(),
});

/** Validated environment values */
export const ENV = EnvSchema.parse(import.meta.env);
