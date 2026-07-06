import type { Company } from "../../types/Company";
import sbcLogo from "../../assets/images/sbc-logo.png";

interface FooterProps {
  company: Company;
}

const Footer = ({ company }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        mt-6
        border-t
        border-slate-200
        py-6
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-4
          text-sm
          text-slate-500
          md:flex-row
        "
      >
        {/* Left */}

        <p>
          © {year} {company.name}. All Rights Reserved.
        </p>

        {/* Right */}

        <div className="flex items-center gap-2">

          <span>Powered by</span>

          <img
            src={sbcLogo}
            alt="SBC"
            className="h-6 object-contain"
          />

        </div>
      </div>
    </footer>
  );
};

export default Footer;