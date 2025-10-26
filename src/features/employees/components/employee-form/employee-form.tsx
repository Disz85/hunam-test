import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { FormProvider, useForm, type UseFormReturn } from 'react-hook-form';

import { employeeService } from '@/api/employees';
import { ErrorAlert } from '@/components/ui/error/error-alert';

import {
  type CreateEmployeeFormData,
  createEmployeeSchema,
} from '../../schemas/create-employee-schema';
import { EmployeeFormContent } from './employee-form-content';

/**
 * Props for the main EmployeeForm component
 */
type EmployeeFormProps = {
  initialData?: Partial<CreateEmployeeFormData>;
  isEdit?: boolean;
  employeeId?: number;
};

/**
 * Employee form component for create/edit operations
 *
 * Handles form submission, validation, and conditional field rendering
 */
export const EmployeeForm = ({
  initialData,
  isEdit = false,
  employeeId,
}: EmployeeFormProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const form: UseFormReturn<CreateEmployeeFormData> =
    useForm<CreateEmployeeFormData>({
      resolver: zodResolver(createEmployeeSchema),
      defaultValues: initialData,
    });

  const { handleSubmit, watch } = form;

  const paymentMethod = watch('paymentMethod');

  const mutation = useMutation({
    mutationFn: async (data: CreateEmployeeFormData) => {
      if (isEdit && employeeId) {
        return employeeService.update(employeeId, data);
      }
      return employeeService.create(data);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['employees'] });
      void navigate({ to: '/admin/employees' });
    },
  });

  const onSubmit = async (data: CreateEmployeeFormData) => {
    try {
      await mutation.mutateAsync(data);
    } catch (_error) {
      // Error handling is done in mutation
    }
  };

  const handleCancel = () => {
    void navigate({ to: '/admin/employees' });
  };

  return (
    <main className="mx-auto max-w-2xl">
      {mutation.error && (
        <div className="mb-6">
          <ErrorAlert message={mutation.error.message} />
        </div>
      )}

      <FormProvider {...form}>
        <EmployeeFormContent
          paymentMethod={paymentMethod}
          onSubmit={e => {
            void handleSubmit(onSubmit)(e);
          }}
          onCancel={handleCancel}
          isLoading={mutation.isPending}
          isEdit={isEdit}
        />
      </FormProvider>
    </main>
  );
};
