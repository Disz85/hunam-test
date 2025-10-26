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

/**
 * Spinner component
 *
 * Displays a loading spinner with optional text
 */
export const Spinner = ({
  text,
  size = 'md',
  variant = 'primary',
  className = '',
}: SpinnerProps) => {
  const sizeClasses = getSizeClasses(size);
  const colorClasses =
    variant === 'secondary'
      ? 'border-white border-r-transparent'
      : 'border-indigo-600 border-r-transparent';

  const spinnerElement = (
    <div
      className={`inline-block ${sizeClasses} animate-spin rounded-full border-4 border-solid ${colorClasses} ${className}`}
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
