/**
 * Authentication domain types module
 *
 * @module features/auth/domain/types/auth-state
 */

import type { UserDto } from '@/api';

/**
 * Login credentials
 *
 * User credentials for authentication.
 */
export type LoginCredentials = {
  /** Username for login */
  username: string;
  /** Password for login */
  password: string;
};

/**
 * Authentication state
 *
 * Complete authentication state including user data, loading state, and methods.
 */
export type AuthState = {
  /** Full user data array */
  user: UserDto[] | null;
  /** Currently authenticated user */
  currentUser: UserDto | null;
  /** Loading state for authentication operations */
  isLoading: boolean;
  /** Whether user is authenticated */
  isAuthenticated: boolean;
  /** Error message if authentication fails */
  error: string | null;
  /** Login function */
  login: (credentials: LoginCredentials) => Promise<void>;
  /** Logout function */
  logout: () => Promise<void>;
  /** Check authentication status function */
  checkAuth: () => Promise<void>;
  /** Clear error message function */
  clearError: () => void;
};
