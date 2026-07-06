import QRCard from "../../components/organisms/QRCard";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

import { employee } from "../../data/employee";

export default function EmployeeQR() {
  const navigate = useNavigate();

  const qrValue = `http://localhost:5173/${employee.firstName.toLowerCase()}-${employee.lastName.toLowerCase()}`;

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">

      <div className="mx-auto mb-6 flex max-w-md">

        <button
          onClick={() => navigate(-1)}
          className="
            flex
            items-center
            gap-2

            rounded-full

            bg-white

            px-4
            py-2

            shadow-sm

            transition

            hover:bg-slate-50
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

      </div>

      <QRCard
        employee={employee}
        qrValue={qrValue}
      />

    </main>
  );
}