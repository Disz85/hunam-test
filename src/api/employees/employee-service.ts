import type { AxiosInstance } from 'axios';

import { BaseService } from '@/api/base-service';

import type {
  CreateEmployeeRequest,
  EmployeeDto,
  EmployeeDtoPagination,
  GetApiEmployeesParams,
} from '../__generated__/api.schemas';

/**
 * Employee service for CRUD operations
 */
export class EmployeeService extends BaseService {
  constructor(httpClient: AxiosInstance) {
    super(httpClient);
  }

  /**
   * Get all employees with optional filters
   */
  public async getAll(
    params?: GetApiEmployeesParams
  ): Promise<EmployeeDtoPagination> {
    return this.handle(async () => {
      const response = await this.httpClient.get<EmployeeDtoPagination>(
        '/api/employees',
        { params }
      );
      return response.data;
    });
  }

  /**
   * Get single employee by ID
   */
  public async getById(id: number): Promise<EmployeeDto> {
    return this.handle(async () => {
      const response = await this.httpClient.get<EmployeeDto>(
        `/api/employees/${id}`
      );
      return response.data;
    });
  }

  /**
   * Create new employee
   */
  public async create(data: CreateEmployeeRequest): Promise<EmployeeDto> {
    return this.handle(async () => {
      const response = await this.httpClient.post<EmployeeDto>(
        '/api/employees',
        data
      );
      return response.data;
    });
  }

  /**
   * Update existing employee
   */
  public async update(
    id: number,
    data: CreateEmployeeRequest
  ): Promise<EmployeeDto> {
    return this.handle(async () => {
      const response = await this.httpClient.put<EmployeeDto>(
        `/api/employees/${id}`,
        data
      );
      return response.data;
    });
  }

  /**
   * Delete employee
   */
  public async delete(id: number): Promise<EmployeeDto> {
    return this.handle(async () => {
      const response = await this.httpClient.delete<EmployeeDto>(
        `/api/employees/${id}`
      );
      return response.data;
    });
  }
}
