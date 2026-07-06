import { Bell, Pencil } from "lucide-react";
import { useNavigate } from "react-router";

import Button from "../atoms/buttons/Button";
import tarentoLogo from "../../assets/images/tarento-logo.png";

export default function EmployeeHeader() {
  const navigate = useNavigate();

  return (
    <header
      className="
        sticky
        top-0
        z-50

        bg-white/95
        backdrop-blur-md

        border-b
        border-slate-200
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

          <Button
            icon={<Bell size={22} />}
            variant="outline"
            color="primary"
            size="sm"
            className="
              h-10
              w-10
              rounded-full
              p-0
            "
          />

          <Button
            icon={<Pencil size={18} />}
            variant="filled"
            color="primary"
            size="sm"
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