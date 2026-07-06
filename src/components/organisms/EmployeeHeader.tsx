import { Bell, Pencil } from "lucide-react";
import { useNavigate } from "react-router";

import tarentoLogo from "../../assets/images/tarento-logo.png";

interface EmployeeHeaderProps {
  onNotificationClick?: () => void;
}

export default function EmployeeHeader({
  onNotificationClick,
}: EmployeeHeaderProps) {
  const navigate = useNavigate();

  return (
    <header
      className="
        sticky
        top-0
        z-50

        border-b
        border-slate-200

        bg-white/95
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          items-center
          justify-between
          px-5
        "
      >
        {/* Company Logo */}

        <img
          src={tarentoLogo}
          alt="Tarento"
          className="h-9 object-contain"
        />

        {/* Actions */}

<div className="flex items-center gap-3">

  {/* Notifications */}

  <button
    onClick={onNotificationClick}
    className="
      flex
      h-10
      w-10
      items-center
      justify-center

      rounded-full

      border-2
      border-[var(--dominant)]

      bg-white

      text-[var(--dominant)]

      transition-all

      hover:bg-[var(--bg)]
    "
  >
    <Bell size={18} />
  </button>

  {/* Edit */}

  <button
    onClick={() => navigate("/employee/edit")}
    className="
      flex
      h-10
      w-10
      items-center
      justify-center

      rounded-full

      bg-[var(--dominant)]

      text-white

      transition-all

      hover:bg-[var(--dominant-alt)]
    "
  >
    <Pencil size={18} />
  </button>

</div>

      </div>
    </header>
  );
}