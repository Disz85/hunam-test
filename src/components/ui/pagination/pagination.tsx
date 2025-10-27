import { Button } from '@/components/ui/button/button';

import { NextIcon, PaginationButton, PrevIcon } from './pagination-button';
import { usePagination } from './use-pagination';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

/**
 * Pagination Component - Tailwind UI Style
 *
 * Features:
 * - Mobile: Simple prev/next buttons
 * - Desktop: Full pagination with page numbers
 * - Results counter
 * - Accessible (ARIA labels, keyboard navigation)
 *
 * @example
 * ```tsx
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   totalItems={100}
 *   itemsPerPage={10}
 *   onPageChange={(page) => navigate({ search: { page } })}
 * />
 * ```
 */
export const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const { pageItems, startItem, endItem, canGoPrev, canGoNext, isEllipsis } =
    usePagination({
      currentPage,
      totalPages,
      totalItems,
      itemsPerPage,
    });

  if (totalPages <= 1) {
    return null;
  }

  const handlePrevPage = () => canGoPrev && onPageChange(currentPage - 1);
  const handleNextPage = () => canGoNext && onPageChange(currentPage + 1);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Mobile: Simple prev/next */}
        <MobilePagination
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />

        {/* Desktop: Full pagination */}
        <DesktopPagination
          startItem={startItem}
          endItem={endItem}
          totalItems={totalItems}
          pageItems={pageItems}
          currentPage={currentPage}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          isEllipsis={isEllipsis}
          onPageChange={onPageChange}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
      </div>
    </div>
  );
};

/**
 * Mobile Pagination - Simple prev/next buttons
 */
type MobilePaginationProps = {
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

const MobilePagination = ({
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
}: MobilePaginationProps) => (
  <div className="flex flex-1 justify-between sm:hidden">
    <Button
      onClick={onPrev}
      disabled={!canGoPrev}
      variant="secondary"
      size="md"
    >
      Previous
    </Button>
    <Button
      onClick={onNext}
      disabled={!canGoNext}
      variant="secondary"
      size="md"
      className="ml-3"
    >
      Next
    </Button>
  </div>
);

/**
 * Desktop Pagination - Full pagination with page numbers
 */
type DesktopPaginationProps = {
  startItem: number;
  endItem: number;
  totalItems: number;
  pageItems: (number | 'ellipsis')[];
  currentPage: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  isEllipsis: (item: number | 'ellipsis') => item is 'ellipsis';
  onPageChange: (page: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

const DesktopPagination = ({
  startItem,
  endItem,
  totalItems,
  pageItems,
  currentPage,
  canGoPrev,
  canGoNext,
  isEllipsis,
  onPageChange,
  onPrev,
  onNext,
}: DesktopPaginationProps) => (
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <ResultsInfo
      startItem={startItem}
      endItem={endItem}
      totalItems={totalItems}
    />

    <nav
      aria-label="Pagination"
      className="isolate inline-flex -space-x-px rounded-md shadow-xs"
    >
      <PaginationButton
        variant="nav"
        position="left"
        disabled={!canGoPrev}
        onClick={onPrev}
        ariaLabel="Go to previous page"
      >
        <PrevIcon />
      </PaginationButton>

      {pageItems.map((item, index) => {
        if (isEllipsis(item)) {
          return (
            <PaginationButton key={`ellipsis-${index}`} variant="ellipsis">
              ...
            </PaginationButton>
          );
        }

        return (
          <PaginationButton
            key={item}
            variant="page"
            isActive={item === currentPage}
            onClick={() => onPageChange(item)}
            ariaLabel={`Go to page ${item}`}
          >
            {item}
          </PaginationButton>
        );
      })}

      <PaginationButton
        variant="nav"
        position="right"
        disabled={!canGoNext}
        onClick={onNext}
        ariaLabel="Go to next page"
      >
        <NextIcon />
      </PaginationButton>
    </nav>
  </div>
);

/**
 * Results Info - "Showing X to Y of Z results"
 */
type ResultsInfoProps = {
  startItem: number;
  endItem: number;
  totalItems: number;
};

const ResultsInfo = ({ startItem, endItem, totalItems }: ResultsInfoProps) => (
  <div>
    <p className="text-sm text-gray-700">
      Showing <span className="font-medium">{startItem}</span> to{' '}
      <span className="font-medium">{endItem}</span> of{' '}
      <span className="font-medium">{totalItems}</span> results
    </p>
  </div>
);
