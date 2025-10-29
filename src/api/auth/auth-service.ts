/**
 * Authentication service module
 *
 * @module api/auth/auth-service
 */

import type { AxiosInstance } from 'axios';

import { BaseService } from '@/api/base-service';

import type { LoginRequest, UserDto } from '../__generated__/api.schemas';

/**
 * Authentication service for user login/logout operations
 *
 * Handles authentication-related API calls including login, logout,
 * and retrieving the current authenticated user.
 *
 * @example
 * ```typescript
 * import { AuthService } from '@/api/auth/auth-service';
 * import { apiClient } from '@/api';
 *
 * const authService = new AuthService(apiClient);
 *
 * // Login
 * const user = await authService.login({ username: 'user', password: 'pass' });
 *
 * // Get current user
 * const currentUser = await authService.getCurrentUser();
 *
 * // Logout
 * await authService.logout();
 * ```
 */
export class AuthService extends BaseService {
  /**
   * @param {AxiosInstance} httpClient - The configured Axios instance
   */
  constructor(httpClient: AxiosInstance) {
    super(httpClient);
  }

  /**
   * Login user with credentials
   *
   * Authenticates a user with username and password.
   * Returns user information upon successful authentication.
   *
   * @param {LoginRequest} credentials - User login credentials
   * @returns {Promise<UserDto[]>} User information
   * @throws {ApiError} If authentication fails
   */
  public async login(credentials: LoginRequest): Promise<UserDto[]> {
    return this.handle(async () => {
      const response = await this.httpClient.post<UserDto[]>(
        '/api/auth/login',
        credentials
      );
      return response.data;
    });
  }

  /**
   * Logout current user
   *
   * Logs out the currently authenticated user.
   * This typically invalidates the session on the server.
   *
   * @returns {Promise<UserDto[]>} Empty response or user data
   * @throws {ApiError} If logout fails
   */
  public async logout(): Promise<UserDto[]> {
    return this.handle(async () => {
      const response =
        await this.httpClient.post<UserDto[]>('/api/auth/logout');
      return response.data;
    });
  }

  /**
   * Get current authenticated user
   *
   * Retrieves information about the currently authenticated user.
   * Used to verify authentication status and get user details.
   *
   * @returns {Promise<UserDto[]>} Current user information
   * @throws {ApiError} If user is not authenticated or request fails
   */
  public async getCurrentUser(): Promise<UserDto[]> {
    return this.handle(async () => {
      const response = await this.httpClient.get<UserDto[]>('/api/auth/me');
      return response.data;
    });
  }
}
