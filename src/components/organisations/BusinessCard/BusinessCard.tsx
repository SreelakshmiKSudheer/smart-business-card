import BusinessCardContent from "../../templates/BusinessCardContent";

import type { Employee } from "../../../types/Employee";

import { employee as defaultEmployee } from "../../../data/employee";

interface BusinessCardProps {
  layout?: "mobile" | "desktop";
  employee?: Employee;
}

export default function BusinessCard({
  layout = "desktop",
  employee = defaultEmployee,
}: BusinessCardProps) {
  return (
    <BusinessCardContent
      layout={layout}
      employee={employee}
    />
  );
}