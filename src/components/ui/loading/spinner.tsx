/**
 * Spinner props
 */
type SpinnerProps = {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
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
export const Spinner = ({ text, size = 'md' }: SpinnerProps) => {
  const sizeClasses = getSizeClasses(size);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div
          className={`inline-block ${sizeClasses} animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent`}
          role="status"
          aria-label="Loading"
        />
        {text && <p className="text-sm text-gray-600">{text}</p>}
      </div>
    </div>
  );
};
