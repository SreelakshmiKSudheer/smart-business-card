import { Bell, Pencil } from "lucide-react";
import { useNavigate } from "react-router";

import Button from "../atoms/buttons/Button";
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

        <div className="flex items-center gap-2">

          {/* Notifications */}

          <Button
            icon={<Bell size={18} />}
            variant="outline"
            color="primary"
            className="
              h-10
              w-10
              rounded-full
              p-0
            "
            onClick={onNotificationClick}
          />

          {/* Edit */}

          <Button
            icon={<Pencil size={18} />}
            variant="filled"
            color="primary"
            className="
              h-10
              w-10
              rounded-full
              p-0
            "
            onClick={() => navigate("/employee/edit")}
          />

        </div>

      </div>
    </header>
  );
}