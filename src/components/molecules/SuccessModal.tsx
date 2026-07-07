interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  open,
  onClose,
}: SuccessModalProps) {
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

          text-center
        "
      >
        <div className="text-5xl">
          ✅
        </div>

        <h2 className="mt-4 text-2xl font-bold">
          Changes Submitted
        </h2>

        <p className="mt-4 text-slate-600">
          Your profile changes have been submitted to the administrator for approval.
        </p>

        <button
          onClick={onClose}
          className="
            mt-8

            rounded-lg

            bg-[var(--dominant)]

            px-6
            py-2

            text-white
          "
        >
          OK
        </button>
      </div>
    </div>
  );
}