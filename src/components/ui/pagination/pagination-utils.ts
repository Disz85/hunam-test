/**
 * Pagination utility functions
 */

export type PageItem = number | 'ellipsis';

export const ELLIPSIS = 'ellipsis' as const;
const MAX_VISIBLE_PAGES = 7;

/**
 * Generates pagination page numbers with ellipsis
 *
 * Algorithm:
 * - Show all pages if total ≤ 7
 * - Always show first and last page
 * - Show current page ± 1
 * - Add ellipsis where needed
 *
 * @example
 * ```ts
 * generatePageNumbers(1, 10)  // [1, 2, 3, '...', 10]
 * generatePageNumbers(5, 10)  // [1, '...', 4, 5, 6, '...', 10]
 * generatePageNumbers(10, 10) // [1, '...', 8, 9, 10]
 * ```
 */
export const generatePageNumbers = (
  currentPage: number,
  totalPages: number
): PageItem[] => {
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: PageItem[] = [1];
  const showLeftEllipsis = currentPage > 3;
  const showRightEllipsis = currentPage < totalPages - 2;

  if (showLeftEllipsis) {
    pages.push(ELLIPSIS);
  }

  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPages - 1, currentPage + 1);

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  if (showRightEllipsis) {
    pages.push(ELLIPSIS);
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};
