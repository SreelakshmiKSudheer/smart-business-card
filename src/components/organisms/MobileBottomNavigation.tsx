import { QrCode, Smartphone } from "lucide-react";
import { useNavigate } from "react-router";

interface MobileBottomNavigationProps {
  active: "card" | "qr";
}

export default function MobileBottomNavigation({
  active,
}: MobileBottomNavigationProps) {
  const navigate = useNavigate();

  return (
    <div
      className="
        sticky
        bottom-0

        flex
        justify-around

        border-t
        border-slate-200

        bg-white

        p-3
      "
    >
      {/* Card */}

      <button
        onClick={() => navigate("/employee/profile")}
        className={`
          flex
          flex-col
          items-center
          gap-1

          ${
            active === "card"
              ? "text-[var(--dominant)]"
              : "text-slate-500"
          }
        `}
      >
        <Smartphone size={22} />

        <span className="text-xs">
          Card
        </span>
      </button>

      {/* QR */}

      <button
        onClick={() => navigate("/employee/qr")}
        className={`
          flex
          flex-col
          items-center
          gap-1

          ${
            active === "qr"
              ? "text-[var(--dominant)]"
              : "text-slate-500"
          }
        `}
      >
        <QrCode size={22} />

        <span className="text-xs">
          QR
        </span>
      </button>
    </div>
  );
}