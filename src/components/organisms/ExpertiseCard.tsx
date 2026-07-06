import type { Employee } from "../../types/Employee";
import Expertise from "../molecules/Expertise";

interface ExpertiseCardProps {
  employee: Employee;
}

const ExpertiseCard = ({ employee }: ExpertiseCardProps) => {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-slate-800">
        Core Expertise
      </h2>

      <Expertise skills={employee.expertise} />
    </section>
  );
};

export default ExpertiseCard;