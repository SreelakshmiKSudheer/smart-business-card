import EmployeeCard from "../../organisms/EmployeeCard";
import ExpertiseCard from "../../organisms/ExpertiseCard";
import CompanyBanner from "../../molecules/CompanyBanner";

import type { Employee } from "../../../types/Employee";
import { company } from "../../../data/company";

interface HeroSectionProps {
  employee: Employee;
  layout?: "mobile" | "desktop";
}

export default function HeroSection({
  employee,
  layout = "desktop",
}: HeroSectionProps) {
  if (layout === "mobile") {
    return (
      <section className="flex flex-col gap-8">
        <EmployeeCard employee={employee} />

        <ExpertiseCard employee={employee} />

        <CompanyBanner company={company} />
      </section>
    );
  }

  return (
    <section
      className="
        grid
        grid-cols-1
        gap-8
        items-start
        lg:grid-cols-3
      "
    >
      <div className="lg:col-span-2">
        <EmployeeCard employee={employee} />
      </div>

      <div className="flex flex-col gap-8">
        <ExpertiseCard employee={employee} />

        <CompanyBanner company={company} />
      </div>
    </section>
  );
}