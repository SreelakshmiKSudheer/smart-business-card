import HeroSection from "../organisations/HeroSection";
import CompanyCard from "../organisms/CompanyCard";
import LocationCard from "../organisms/LocationCard";

import { employee } from "../../data/employee";
import { company } from "../../data/company";

interface BusinessCardContentProps {
  layout?: "mobile" | "desktop";
}

export default function BusinessCardContent({
  layout = "desktop",
}: BusinessCardContentProps) {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection
        employee={employee}
        layout={layout}
      />

      <CompanyCard company={company} />

      <LocationCard
  company={company}
  layout={layout}
/>
    </div>
  );
}