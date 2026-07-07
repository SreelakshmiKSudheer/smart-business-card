import NotificationHeader from "../molecules/NotificationHeader";
import NotificationItem from "../molecules/NotificationItem";

interface NotificationDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function NotificationDrawer({
  open,
  onClose,
}: NotificationDrawerProps) {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-40
          bg-black/30
          backdrop-blur-sm
          transition-opacity
          duration-300

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-50

          flex
          h-screen
          w-full
          max-w-[24rem]
          flex-col

          bg-white
          shadow-2xl

          transition-transform
          duration-300
          ease-in-out

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <NotificationHeader onClose={onClose} />

        {/* Notification List */}

        <div className="flex-1 overflow-y-auto">

          <NotificationItem
            unread
            title="QR Scanned"
            message="Your QR profile was viewed by John."
            time="2m"
          />

          <NotificationItem
            unread
            title="Contact Saved"
            message="Someone downloaded your contact card."
            time="10m"
          />

          <NotificationItem
            title="Company Updated"
            message="HR updated company information."
            time="1h"
          />

          <NotificationItem
            title="Weekly Report"
            message="Your QR received 48 scans this week."
            time="Yesterday"
          />

        </div>
      </aside>
    </>
  );
}