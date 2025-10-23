import { z } from 'zod';

import type { LoginCredentials } from '../domain/types/auth-state';

/**
 * Validation schema for login form
 *
 * Simple validation for existing credentials - the backend will handle authentication
 */
export const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
}) satisfies z.ZodType<LoginCredentials>;
