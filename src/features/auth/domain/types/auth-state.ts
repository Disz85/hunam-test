import type { UserDto } from '@/api';

/**
 * Login credentials type
 */
export type LoginCredentials = {
  username: string;
  password: string;
};

/**
 * Authentication state
 */
export type AuthState = {
  user: UserDto[] | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
};
