// components/molecules/PaginationControls.tsx

import PaginationButton from "../atoms/PaginationButton";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) => {
  const pages: (number | "...")[] = [];

  if (totalPages <= 5) {
    // Show all pages when page count is small
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Always show first page
    pages.push(1);

    // Left ellipsis
    if (currentPage > 3) {
      pages.push("...");
    }

    // Previous page
    if (currentPage > 2) {
      pages.push(currentPage - 1);
    }

    // Current page
    if (currentPage !== 1 && currentPage !== totalPages) {
      pages.push(currentPage);
    }

    // Next page
    if (currentPage < totalPages - 1) {
      pages.push(currentPage + 1);
    }

    // Right ellipsis
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always show last page
    pages.push(totalPages);
  }

  // Remove duplicate pages while preserving order
  const uniquePages = pages.filter(
    (page, index) => pages.indexOf(page) === index
  );

  return (
    <div className="flex items-center gap-2">
      {/* Previous Button */}
      <PaginationButton
        previous
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      {/* Page Numbers */}
      {uniquePages.map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="px-1 text-sm text-(--text-light)"
          >
            ...
          </span>
        ) : (
          <PaginationButton
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PaginationButton>
        )
      )}

      {/* Next Button */}
      <PaginationButton
        next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
};

export default PaginationControls;