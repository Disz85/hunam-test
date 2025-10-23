import { useContext } from 'react';

import { AuthContext } from '../context/auth-context';
import type { AuthState } from '../domain/types/auth-state';

/**
 * Hook to use authentication context
 *
 * @throws {Error} If used outside of AuthProvider
 */
export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
