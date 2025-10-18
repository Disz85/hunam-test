import type { AxiosInstance } from 'axios';

import type { LoginRequest, UserDto } from '../__generated__/api.schemas';

/**
 * Authentication service for user login/logout operations
 */
export class AuthService {
  constructor(private readonly httpClient: AxiosInstance) {}

  /**
   * Login user with credentials
   */
  public async login(credentials: LoginRequest): Promise<UserDto[]> {
    const response = await this.httpClient.post<UserDto[]>(
      '/api/auth/login',
      credentials
    );
    return response.data;
  }

  /**
   * Logout current user
   */
  public async logout(): Promise<UserDto[]> {
    const response = await this.httpClient.post<UserDto[]>('/api/auth/logout');
    return response.data;
  }

  /**
   * Get current authenticated user
   */
  public async getCurrentUser(): Promise<UserDto[]> {
    const response = await this.httpClient.get<UserDto[]>('/api/auth/me');
    return response.data;
  }
}
