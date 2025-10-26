import type { ReactNode } from 'react';

/**
 * Card props
 */
type CardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Card component
 *
 * Provides a consistent card container with shadow and border
 */
export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 ${className}`}
    >
      {children}
    </div>
  );
};
