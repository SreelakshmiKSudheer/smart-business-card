import type { TextareaProps } from "./textarea.types";

export default function Textarea({
  label,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">

      {label && (
        <label
          className="
            text-sm
            font-medium
            text-slate-700
          "
        >
          {label}
        </label>
      )}

      <textarea
        rows={5}
        className={`
          rounded-xl
          border
          border-slate-300

          bg-white

          px-4
          py-3

          outline-none

          resize-none

          transition

          focus:border-[var(--dominant)]
          focus:ring-2
          focus:ring-[var(--dominant)]/20

          ${className}
        `}
        {...props}
      />

    </div>
  );
}