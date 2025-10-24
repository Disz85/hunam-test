import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui/error-message';
import { FormField } from '@/components/ui/form-field';
import { FormInput } from '@/components/ui/form-input';
import { FormSelect } from '@/components/ui/form-select';

import { EducationLabels } from '../../../domain/enums/education-enum';
import { SexLabels } from '../../../domain/enums/sex-enum';
import type { CreateEmployeeFormData } from '../../../schemas/create-employee-schema';

type ContactAndDetailsFieldsProps = {
  register: UseFormRegister<CreateEmployeeFormData>;
  errors: FieldErrors<CreateEmployeeFormData>;
};

/**
 * Contact and personal details fields component
 */
export const ContactAndDetailsFields = ({
  register,
  errors,
}: ContactAndDetailsFieldsProps) => (
  <>
    <div className="sm:col-span-3">
      <FormField label="Phone Number" required>
        <FormInput type="tel" autoComplete="tel" {...register('phone')} />
        {errors.phone?.message && (
          <ErrorMessage message={errors.phone.message} />
        )}
      </FormField>
    </div>

    <div className="sm:col-span-3">
      <FormField label="Sex" required>
        <FormSelect {...register('sex', { valueAsNumber: true })}>
          <option value="">Select sex</option>
          {Object.entries(SexLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </FormSelect>
        {errors.sex?.message && <ErrorMessage message={errors.sex.message} />}
      </FormField>
    </div>

    <div className="sm:col-span-6">
      <FormField label="Education Level" required>
        <FormSelect {...register('education', { valueAsNumber: true })}>
          <option value="">Select education level</option>
          {Object.entries(EducationLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </FormSelect>
        {errors.education?.message && (
          <ErrorMessage message={errors.education.message} />
        )}
      </FormField>
    </div>
  </>
);
