interface ChipProps {
  label: string;
}

const Chip = ({ label }: ChipProps) => {
  return (
    <div
      className="
        rounded-full
        border
        border-slate-200
        bg-slate-50
        px-4
        py-2
        text-sm
        font-medium
        text-slate-700
        transition-all
        duration-200
        hover:bg-slate-100
      "
    >
      {label}
    </div>
  );
};

export default Chip;