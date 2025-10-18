import type { AxiosInstance } from 'axios';

import type {
  CreateEmployeeRequest,
  EmployeeDto,
  EmployeeDtoPagination,
  GetApiEmployeesParams,
} from '../__generated__/api.schemas';

/**
 * Employee service for CRUD operations
 */
export class EmployeeService {
  constructor(private readonly httpClient: AxiosInstance) {}

  /**
   * Get all employees with optional filters
   */
  public async getAll(
    params?: GetApiEmployeesParams
  ): Promise<EmployeeDtoPagination> {
    const response = await this.httpClient.get<EmployeeDtoPagination>(
      '/api/employees',
      { params }
    );
    return response.data;
  }

  /**
   * Get single employee by ID
   */
  public async getById(id: number): Promise<EmployeeDto> {
    const response = await this.httpClient.get<EmployeeDto>(
      `/api/employees/${id}`
    );
    return response.data;
  }

  /**
   * Create new employee
   */
  public async create(data: CreateEmployeeRequest): Promise<EmployeeDto> {
    const response = await this.httpClient.post<EmployeeDto>(
      '/api/employees',
      data
    );
    return response.data;
  }

  /**
   * Update existing employee
   */
  public async update(
    id: number,
    data: CreateEmployeeRequest
  ): Promise<EmployeeDto> {
    const response = await this.httpClient.put<EmployeeDto>(
      `/api/employees/${id}`,
      data
    );
    return response.data;
  }

  /**
   * Delete employee
   */
  public async delete(id: number): Promise<EmployeeDto> {
    const response = await this.httpClient.delete<EmployeeDto>(
      `/api/employees/${id}`
    );
    return response.data;
  }
}
