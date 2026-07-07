import { useEffect, useRef } from "react";

interface FilterDropdownProps {
  open: boolean;
  options: string[];
  selected?: string;
  onSelect: (value: string) => void;
  onClose: () => void;
}

const FilterDropdown = ({
  open,
  options,
  selected,
  onSelect,
  onClose,
}: FilterDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full z-50 mt-2 w-full min-w-[12rem] max-w-[15rem] overflow-hidden rounded-lg border border-(--border) bg-(--card) shadow-lg"
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => {
            onSelect(option);
            onClose();
          }}
          className={`w-full px-4 py-3 text-left text-sm transition-colors
            ${
              selected === option
                ? "bg-(--primary)/10 text-(--primary)"
                : "hover:bg-(--background)"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterDropdown;