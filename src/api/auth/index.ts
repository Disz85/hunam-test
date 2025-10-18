/**
 * Authentication API module
 *
 * Provides authentication services and types for login/logout functionality
 */
import { apiClient } from '../api-client';
import { AuthService } from './auth-service';

/**
 * Service class for dependency injection
 */
export { AuthService } from './auth-service';

/**
 * Pre-configured service instance (recommended for standard use)
 */
export const authService = new AuthService(apiClient);

/**
 * Authentication-related types
 */
export type * from './auth-types';
