import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error-message';
import { FormField } from '@/components/ui/form-field';
import { FormInput } from '@/components/ui/form-input';

import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type BuildingDetailsFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Building details fields component (house number, building, staircase, floor, door)
 */
export const BuildingDetailsFields = ({
  register,
  errors,
}: BuildingDetailsFieldsProps) => (
  <>
    <div className="sm:col-span-2">
      <FormField label="House Number" required>
        <FormInput {...register('houseNumber')} />
        {errors.houseNumber?.message && (
          <ErrorMessage message={errors.houseNumber.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-2">
      <FormField label="Building">
        <FormInput {...register('building')} />
        {errors.building?.message && (
          <ErrorMessage message={errors.building.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-2">
      <FormField label="Staircase">
        <FormInput {...register('staircase')} />
        {errors.staircase?.message && (
          <ErrorMessage message={errors.staircase.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-2">
      <FormField label="Floor">
        <FormInput {...register('floor')} />
        {errors.floor?.message && (
          <ErrorMessage message={errors.floor.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-2">
      <FormField label="Door">
        <FormInput {...register('door')} />
        {errors.door?.message && <ErrorMessage message={errors.door.message} />}
      </FormField>
    </div>
  </>
);
