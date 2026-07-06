import EmployeeCard from "../../organisms/EmployeeCard";
import ExpertiseCard from "../../organisms/ExpertiseCard";
  
import type { Employee } from "../../../types/Employee";

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
      "
    >
      {/* Left */}

      <div className="lg:col-span-2">

        <EmployeeCard employee={employee} />

      </div>

      {/* Right */}

      <div>

        <ExpertiseCard employee={employee} />
      </div>
    </section>
  );
}