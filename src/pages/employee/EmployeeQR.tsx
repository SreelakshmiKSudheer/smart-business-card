
import QRCard from "../../components/organisms/QRCard";
import { employee } from "../../data/employee";

export default function EmployeeQR() {
  const qrValue = `http://localhost:5173/${employee.firstName.toLowerCase()}-${employee.lastName.toLowerCase()}`;

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">

      <QRCard
        employee={employee}
        qrValue={qrValue}
      />

    </main>
  );
}