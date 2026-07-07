import QRCard from "../organisms/QRCard";

import { employee } from "../../data/employee";

export default function EmployeeQRPreview() {
  const qrValue = `${window.location.origin}/${employee.firstName.toLowerCase()}-${employee.lastName.toLowerCase()}`;

  return (
    <div className="p-4">
      <QRCard
        employee={employee}
        qrValue={qrValue}
      />
    </div>
  );
}