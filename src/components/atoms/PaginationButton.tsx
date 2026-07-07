import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationButtonProps = {
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  previous?: boolean;
  next?: boolean;
  onClick?: () => void;
}

const PaginationButton = ({
  children,
  active = false,
  disabled = false,
  previous = false,
  next = false,
  onClick,
}: PaginationButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        h-9 min-w-9 rounded-md border flex items-center justify-center
        text-sm font-medium transition-colors
        ${
          active
            ? "bg-(--dominant) text-white border-(--dominant)"
            : "bg-(--card) text-(--text) border-(--border)"
        }
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-(--background)"
        }
      `}
    >
      {previous ? (
        <ChevronLeft className="h-4 w-4" />
      ) : next ? (
        <ChevronRight className="h-4 w-4" />
      ) : (
        children
      )}
    </button>
  );
};

export default PaginationButton;