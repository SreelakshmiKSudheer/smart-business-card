import { QrCode } from "lucide-react";
import { useNavigate } from "react-router";

export default function FloatingQRButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/employee/qr")}
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full

        bg-teal-700
        text-white

        shadow-xl

        transition-all
        duration-300

        hover:scale-105
        active:scale-95

        lg:hidden
      "
      aria-label="Show My QR"
      title="Show My QR"
    >
      <QrCode size={26} strokeWidth={2.5} />
    </button>
  );
}