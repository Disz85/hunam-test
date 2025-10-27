import {
  ELLIPSIS,
  generatePageNumbers,
  type PageItem,
} from './pagination-utils';

/**
 * Custom hook for pagination logic
 *
 * Separates business logic from UI rendering
 */

type UsePaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
};

type UsePaginationReturn = {
  pageItems: PageItem[];
  startItem: number;
  endItem: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  isEllipsis: (item: PageItem) => item is 'ellipsis';
};

export const usePagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
}: UsePaginationProps): UsePaginationReturn => {
  const pageItems = generatePageNumbers(currentPage, totalPages);
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return {
    pageItems,
    startItem,
    endItem,
    canGoPrev: currentPage > 1,
    canGoNext: currentPage < totalPages,
    isEllipsis: (item): item is 'ellipsis' => item === ELLIPSIS,
  };
};
