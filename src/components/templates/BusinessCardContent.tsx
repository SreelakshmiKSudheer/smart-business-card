import HeroSection from "../organisations/HeroSection";
import CompanyCard from "../organisms/CompanyCard";
import LocationCard from "../organisms/LocationCard";

import { company } from "../../data/company";

import type { Employee } from "../../types/Employee";

interface BusinessCardContentProps {
  layout?: "mobile" | "desktop";
  employee: Employee;
}

export default function BusinessCardContent({
  layout = "desktop",
  employee,
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