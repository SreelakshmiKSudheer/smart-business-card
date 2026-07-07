type PaginationLabelProps = {
  start: number;
  end: number;
  total: number;
};

const PaginationLabel = ({
  start,
  end,
  total,
}: PaginationLabelProps) => {
  return (
    <p className="text-sm text-(--text-light)">
      Showing {start} to {end} of {total.toLocaleString()}
    </p>
  );
};

export default PaginationLabel;