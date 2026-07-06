import EmployeeCard from "../../organisms/EmployeeCard";
import ExpertiseCard from "../../organisms/ExpertiseCard";
import CompanyBanner from "../../molecules/CompanyBanner";

import type { Employee } from "../../../types/Employee";
import { company } from "../../../data/company";

interface HeroSectionProps {
  employee: Employee;
}

export default function HeroSection({
  employee,
}: HeroSectionProps) {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-8
        lg:grid-cols-3
        items-start
      "
    >
      {/* Left Column */}

      <div className="lg:col-span-2">
        <EmployeeCard employee={employee} />
      </div>

      {/* Right Column */}

      <div className="flex flex-col gap-8">

        <ExpertiseCard employee={employee} />

        <CompanyBanner company={company} />

      </div>
    </section>
  );
}