import { createContext } from 'react';

import type { LoginFormData } from '../features/auth';

/**
 * Auth context value type
 */
export interface AuthContextValue {
  user: unknown;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginFormData) => void;
  logout: () => void;
  isLoginPending: boolean;
  isLogoutPending: boolean;
  loginError: Error | null;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);
