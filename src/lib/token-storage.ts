/**
 * Auth storage utility for HttpOnly cookie-based authentication
 *
 * Manages a simple localStorage flag for optimistic auth state.
 * The actual authentication is validated by the backend via HttpOnly cookies.
 *
 * This flag is used for:
 * - Quick redirect on index route (before API call)
 * - Optimistic UI state
 *
 * The real auth validation happens in route loaders via API calls.
 */
export class TokenStorage {
  private static readonly AUTH_FLAG_KEY = 'isAuthenticated' as const;

  /**
   * Set authentication flag after successful login
   */
  public static setAuthenticated(): void {
    localStorage.setItem(this.AUTH_FLAG_KEY, 'true');
  }

  /**
   * Remove authentication flag on logout
   */
  public static removeAuthenticated(): void {
    localStorage.removeItem(this.AUTH_FLAG_KEY);
  }

  /**
   * Check if authentication flag is set (optimistic check)
   *
   * Note: This is NOT a guarantee of valid authentication.
   * Protected routes must validate via API call.
   */
  public static isAuthenticated(): boolean {
    return localStorage.getItem(this.AUTH_FLAG_KEY) === 'true';
  }

  public static getToken(): string | null {
    return this.isAuthenticated() ? 'authenticated' : null;
  }

  public static setToken(_token: string): void {
    this.setAuthenticated();
  }

  public static removeToken(): void {
    this.removeAuthenticated();
  }

  public static hasToken(): boolean {
    return this.isAuthenticated();
  }
}
