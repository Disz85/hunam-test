import { cn } from '@/lib/cn';

/**
 * Spinner props
 */
type SpinnerProps = {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  className?: string;
};

/**
 * Get size classes for the spinner
 */
const getSizeClasses = (size: SpinnerProps['size']) => {
  switch (size) {
    case 'sm':
      return 'size-4';
    case 'lg':
      return 'size-12';
    case 'md':
    default:
      return 'size-8';
  }
};

const VARIANT_COLOR_CLASSES = {
  primary: 'border-indigo-600 border-r-transparent',
  secondary: 'border-white border-r-transparent',
};

/**
 * Spinner component
 *
 * Displays a loading spinner with optional text
 */
export const Spinner = ({
  text,
  size = 'md',
  variant = 'primary',
  className,
}: SpinnerProps) => {
  const sizeClasses = getSizeClasses(size);
  const colorClasses = VARIANT_COLOR_CLASSES[variant];

  const spinnerElement = (
    <div
      className={cn(
        'inline-block animate-spin rounded-full border-4 border-solid',
        sizeClasses,
        colorClasses,
        className
      )}
      role="status"
      aria-label="Loading"
    />
  );

  // Simple spinner without wrapper for inline use
  if (!text) {
    return spinnerElement;
  }

  // Full spinner with text (for page-level loading)
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        {spinnerElement}
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};
