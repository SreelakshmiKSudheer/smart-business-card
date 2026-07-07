import { X } from "lucide-react";

interface NotificationHeaderProps {
  onClose: () => void;
}

export default function NotificationHeader({
  onClose,
}: NotificationHeaderProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        border-b
        border-slate-200

        px-6
        py-5
      "
    >
      <div>

        <h2 className="text-xl font-bold text-slate-800">
          Notifications
        </h2>

        <p className="text-sm text-slate-500">
          Stay updated with your profile activity
        </p>

      </div>

      <button
        onClick={onClose}
        className="
          rounded-full
          p-2
          transition
          hover:bg-slate-100
        "
      >
        <X size={22} />
      </button>
    </div>
  );
}