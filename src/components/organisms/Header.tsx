import sbcLogo from "../../assets/images/sbc-logo.png";

interface HeaderProps {
  companyLogo: string;
  companyName: string;
}

export default function Header({
  companyLogo,
  companyName,
}: HeaderProps) {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-white
        border-b
        border-slate-200
        shadow-sm
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        {/* Client Company */}

        <img
          src={companyLogo}
          alt={companyName}
          className="h-10 object-contain"
        />

        {/* SBC */}

        <div className="flex items-center gap-2">

          <span className="hidden text-sm text-slate-500 md:block">
            Powered by
          </span>

          <img
            src={sbcLogo}
            alt="SBC"
            className="h-8 object-contain"
          />

        </div>
      </div>
    </header>
  );
}