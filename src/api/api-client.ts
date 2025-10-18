/**
 * API Client module - Singleton axios instance with interceptors
 *
 * Provides centralized HTTP client with:
 * - Automatic auth token injection (via request interceptor)
 * - Auto-logout on 401 errors (via response interceptor)
 * - Development error logging
 * - Configurable timeout and retry logic
 *
 * @example
 * ```typescript
 * import { apiClient } from '@/api/client';
 *
 * const response = await apiClient.get('/employees');
 * ```
 */

import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from 'axios';

import { TokenStorage } from '@/lib/token-storage';

/**
 * API client configuration constants
 */
const API_CONFIG = {
  /** Request timeout in milliseconds */
  TIMEOUT: 30000,
  /** Number of retry attempts for failed requests */
  RETRY_ATTEMPTS: 3,
} as const;

/**
 * API Client - Singleton pattern for centralized HTTP communication
 *
 * Implements the Singleton pattern to ensure a single configured Axios instance
 * is used throughout the application. All configuration, interceptors, and helpers
 * are encapsulated within this class for maintainability.
 */
export class ApiClient {
  private static instance: AxiosInstance;

  /**
   * Get and validate API base URL from environment variables
   *
   * @private
   * @throws {Error} If VITE_API_BASE_URL is not defined or empty
   * @returns {string} Validated API base URL
   */
  private static getApiBaseUrl(): string {
    const apiBaseUrl: unknown = import.meta.env.VITE_API_BASE_URL;

    if (typeof apiBaseUrl !== 'string' || apiBaseUrl.trim().length === 0) {
      throw new Error(
        'VITE_API_BASE_URL is not defined in environment variables.\n' +
          'Please check your .env file.'
      );
    }

    return apiBaseUrl;
  }

  /**
   * Log API errors to console in development mode
   *
   * @private
   * @param {AxiosError} error - Axios error object
   */
  private static logErrorInDevelopment(error: AxiosError): void {
    if (import.meta.env.DEV !== true) {
      return;
    }

    console.error('[API Error]', {
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });
  }

  /**
   * Handle 401 Unauthorized errors by clearing token and redirecting to login
   *
   * @private
   * @param {AxiosError} error - Axios error object
   */
  private static handleUnauthorizedError(error: AxiosError): void {
    if (error.response?.status !== 401) {
      return;
    }

    TokenStorage.removeToken();

    // Don't redirect if already on login page
    if (window.location.pathname === '/login') {
      return;
    }

    window.location.href = '/login';
  }

  /**
   * Setup request interceptor
   *
   * For HttpOnly cookie-based auth, we don't need to inject tokens manually.
   * The browser automatically sends cookies with withCredentials: true.
   *
   * @private
   * @param {AxiosInstance} client - Axios instance to configure
   */
  private static setupRequestInterceptor(client: AxiosInstance): void {
    client.interceptors.request.use(
      config => {
        // HttpOnly cookie auth: browser sends cookie automatically
        // No manual Authorization header needed
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );
  }

  /**
   * Setup response interceptor for global error handling
   *
   * @private
   * @param {AxiosInstance} client - Axios instance to configure
   */
  private static setupResponseInterceptor(client: AxiosInstance): void {
    client.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        this.logErrorInDevelopment(error);
        this.handleUnauthorizedError(error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Create and configure the Axios instance with interceptors
   *
   * @private
   * @returns {AxiosInstance} Configured Axios client
   */
  private static createClient(): AxiosInstance {
    const client = axios.create({
      baseURL: this.getApiBaseUrl(),
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: API_CONFIG.TIMEOUT,
      withCredentials: true,
    });

    this.setupRequestInterceptor(client);
    this.setupResponseInterceptor(client);

    return client;
  }

  /**
   * Get the configured Axios instance (lazy initialization)
   *
   * @returns {AxiosInstance} Configured Axios client
   */
  public static getClient(): AxiosInstance {
    if (typeof this.instance === 'undefined') {
      this.instance = this.createClient();
    }
    return this.instance;
  }

  /**
   * Custom instance for Orval mutator (optional)
   *
   * Automatically unwraps response data for cleaner API in generated code.
   * This method is used by Orval's mutator configuration.
   *
   * @template T - Response data type
   * @param {AxiosRequestConfig} config - Axios request configuration
   * @returns {Promise<T>} Unwrapped response data
   */
  public static async customInstance<T>(
    config: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.getClient().request<T>(config);
    return response.data;
  }
}

/**
 * Export singleton Axios instance for direct use
 *
 * Pre-configured instance ready for immediate use in services and hooks.
 */
export const apiClient = ApiClient.getClient();
