import { QrCode, Smartphone } from "lucide-react";

interface MobileBottomNavigationProps {
  active: "card" | "qr";
  onChange: (screen: "card" | "qr") => void;
}

export default function MobileBottomNavigation({
  active,
  onChange,
}: MobileBottomNavigationProps) {
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
        onClick={() => onChange("card")}
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
        onClick={() => onChange("qr")}
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