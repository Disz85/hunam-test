/**
 * Authentication schemas module
 *
 * @module features/auth/schemas/login-schema
 */

import { z } from 'zod';

import type { LoginCredentials } from '../domain/types/auth-state';

/**
 * Validation schema for login form
 *
 * Simple validation for existing credentials - the backend will handle authentication.
 * Error messages are handled in the form component using i18n.
 *
 * @example
 * ```typescript
 * import { loginSchema } from '@/features/auth/schemas/login-schema';
 * import { zodResolver } from '@hookform/resolvers/zod';
 *
 * const form = useForm({
 *   resolver: zodResolver(loginSchema),
 * });
 * ```
 */
export const loginSchema = z.object({
  username: z.string().min(1, 'errors.required'),
  password: z.string().min(1, 'errors.required'),
}) satisfies z.ZodType<LoginCredentials>;
