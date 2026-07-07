
import PaginationControls from "../molecules/PaginationControls";
import PaginationLabel from "../atoms/PaginationLabel";

type PaginationProps = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const start = (currentPage - 1) * pageSize + 1;

  const end = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <PaginationLabel
        start={start}
        end={end}
        total={totalItems}
      />

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Pagination;