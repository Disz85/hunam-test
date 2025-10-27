import { z } from 'zod';

import type { LoginCredentials } from '../domain/types/auth-state';

/**
 * Validation schema for login form
 *
 * Simple validation for existing credentials - the backend will handle authentication
 * Note: Error messages are handled in the form component using i18n
 */
export const loginSchema = z.object({
  username: z.string().min(1, 'errors.required'),
  password: z.string().min(1, 'errors.required'),
}) satisfies z.ZodType<LoginCredentials>;
