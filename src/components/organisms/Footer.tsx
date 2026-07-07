import type { Company } from "../../types/Company";
import sbcLogo from "../../assets/images/sbc-logo.png";

interface FooterProps {
  company: Company;
}

const Footer = ({ company }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-slate-200 p-6 sticky bottom-0 bg-(--card) flex flex-col justify-between items-start gap-4 text-sm text-(--text-light) md:flex-row md:items-center">
        {/* Left */}

        <p>&copy; {year} {company.name}. All Rights Reserved.</p>

        {/* Right */}

        <div className="flex items-center gap-2">
          <span>Powered by</span>
          <img
            src={sbcLogo}
            alt="SBC"
            className="h-6 object-contain"
          />
        </div>
     </footer>
  );
};

export default Footer;