import { createContext } from 'react';

import type { AuthState } from '../domain/types/auth-state';

/**
 * Authentication context
 */
export const AuthContext = createContext<AuthState | null>(null);
