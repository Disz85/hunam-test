/**
 * Token storage utility for managing authentication tokens
 *
 * Provides a centralized, type-safe interface for auth token operations.
 * Abstracts localStorage implementation for easier testing and potential migration.
 */
export class TokenStorage {
  private static readonly AUTH_TOKEN_KEY = 'auth_token' as const;

  /**
   * Get the authentication token from storage
   *
   * @returns {string | null} The stored token, or null if not found
   */
  public static getToken(): string | null {
    return localStorage.getItem(this.AUTH_TOKEN_KEY);
  }

  /**
   * Store the authentication token
   *
   * @param {string} token - The JWT token to store
   */
  public static setToken(token: string): void {
    localStorage.setItem(this.AUTH_TOKEN_KEY, token);
  }

  /**
   * Remove the authentication token from storage
   *
   * Used during logout or when token is invalid
   */
  public static removeToken(): void {
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
  }

  /**
   * Check if a valid token exists in storage
   *
   * @returns {boolean} True if a non-empty token exists
   */
  public static hasToken(): boolean {
    const token = this.getToken();
    return token !== null && token.trim().length > 0;
  }
}
