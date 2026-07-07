import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

import tarentoLogo from "../../assets/images/tarento-logo.png";

interface EmployeeHeaderProps {
  logo?: boolean;
  showBack?: boolean;
  title?: string;
  rightContent?: ReactNode;
}

export default function EmployeeHeader({
  logo = false,
  showBack = false,
  title,
  rightContent,
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
        {/* Left */}

        {logo ? (
          <img
            src={tarentoLogo}
            alt="Tarento"
            className="h-9 object-contain"
          />
        ) : (
          <div className="flex items-center gap-3">
            {showBack && (
              <button
                onClick={() => navigate(-1)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  hover:bg-slate-100
                  transition
                "
              >
                <ArrowLeft size={22} />
              </button>
            )}

            {title && (
              <h1 className="text-lg font-semibold text-slate-900">
                {title}
              </h1>
            )}
          </div>
        )}

        {/* Right */}

        {rightContent ? (
  <div className="flex items-center gap-2">
    {rightContent}
  </div>
) : (
  <div className="w-10" />
)}
      </div>
    </header>
  );
}