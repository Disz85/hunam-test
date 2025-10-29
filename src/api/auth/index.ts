/**
 * Authentication API module
 *
 * @module api/auth
 */

/**
 * Authentication API module
 *
 * Provides authentication services and types for login/logout functionality.
 * Exports both the service class and a pre-configured instance.
 */
import { apiClient } from '../api-client';
import { AuthService } from './auth-service';

/**
 * Service class for dependency injection
 *
 * Use this when you need to inject a custom HTTP client for testing or special use cases.
 */
export { AuthService } from './auth-service';

/**
 * Pre-configured service instance (recommended for standard use)
 *
 * Ready-to-use instance with the default apiClient configuration.
 */
export const authService = new AuthService(apiClient);

/**
 * Authentication-related types
 *
 * Exports LoginRequest and UserDto types from generated schemas.
 */
export type * from './auth-types';
