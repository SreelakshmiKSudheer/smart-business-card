interface NotificationItemProps {
  title: string;
  message: string;
  time: string;
  unread?: boolean;
}

export default function NotificationItem({
  title,
  message,
  time,
  unread = false,
}: NotificationItemProps) {
  return (
    <div
      className="
        flex
        gap-3
        rounded-xl
        p-4
        transition
        hover:bg-slate-50
      "
    >
      {/* Unread Dot */}

      <div
        className={`
          mt-2
          h-2.5
          w-2.5
          rounded-full

          ${
            unread
              ? "bg-teal-600"
              : "bg-slate-300"
          }
        `}
      />

      {/* Content */}

      <div className="flex-1">

        <div className="flex items-center justify-between">

          <h4 className="font-semibold text-slate-800">

            {title}

          </h4>

          <span className="text-xs text-slate-400">

            {time}

          </span>

        </div>

        <p className="mt-1 text-sm text-slate-500">

          {message}

        </p>

      </div>

    </div>
  );
}