interface ConfirmationModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({
  open,
  onCancel,
  onConfirm,
}: ConfirmationModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/40
      "
    >
      <div
        className="
          w-full
          max-w-md

          rounded-2xl

          bg-white

          p-8

          shadow-xl
        "
      >
        <h2 className="text-2xl font-bold">
          Submit Changes?
        </h2>

        <p className="mt-4 text-slate-600">
          Are you sure you want to submit your profile
          changes for administrator approval?
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onCancel}
            className="
              rounded-lg

              border
              border-slate-300

              px-5
              py-2
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              rounded-lg

              bg-[var(--dominant)]

              px-5
              py-2

              text-white
            "
          >
            Submit
          </button>

        </div>

      </div>
    </div>
  );
}