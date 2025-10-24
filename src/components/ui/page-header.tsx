import type { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

/**
 * Page header component
 *
 * Provides consistent page header structure with title and description
 */
export const PageHeader = ({
  title,
  description,
  children,
}: PageHeaderProps) => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        )}
      </header>
      {children}
    </div>
  );
};
