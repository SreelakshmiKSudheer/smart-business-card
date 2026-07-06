import EmployeeInfo from "../molecules/EmployeeInfo";
import AboutCard from "../molecules/AboutCard";

import profileImage from "../../assets/images/profile.png";
import EmployeeButtons from "../molecules/EmployeeButtons/EmployeeButtons";

import type { Employee } from "../../types/Employee";


interface EmployeeCardProps {
  employee: Employee;
}

export default function EmployeeCard({
  employee,
}: EmployeeCardProps) {
  return (
    <section
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-md
      "
    >
      <EmployeeInfo
        image={employee.profileImage}
        name={`${employee.firstName} ${employee.lastName}`}
        designation={employee.designation}
      />

      <div className="mt-6">
        <AboutCard
          about={employee.about}
        />
      </div>

      <EmployeeButtons
        email={employee.email}
        phone={employee.phone}
        linkedin={employee.linkedin}
      />
    </section>
  );
}