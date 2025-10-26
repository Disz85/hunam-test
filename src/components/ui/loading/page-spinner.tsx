import { Spinner } from './spinner';

/**
 * PageSpinner props
 */
type PageSpinnerProps = {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
};

/**
 * Full page spinner component
 *
 * Centers the spinner on the page with full height
 */
export const PageSpinner = ({
  text = 'Loading...',
  size = 'md',
}: PageSpinnerProps) => {
  return (
    <div className="flex min-h-[200px] items-center justify-center py-12">
      <Spinner text={text} size={size} />
    </div>
  );
};
