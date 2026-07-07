interface ChipProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Chip = ({
  label,
  selected = false,
  disabled = false,
  onClick,
}: ChipProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-200

        ${
          selected
            ? "bg-[var(--dominant)] border-[var(--dominant)] text-white"
            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
        }

        ${
          disabled
            ? "cursor-not-allowed opacity-40"
            : "cursor-pointer"
        }
      `}
    >
      {label}
    </button>
  );
};

export default Chip;