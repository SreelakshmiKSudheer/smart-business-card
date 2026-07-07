import EmployeeInfo from "../molecules/EmployeeInfo";
import QRPreview from "../molecules/QRPreview";
import Button from "../atoms/buttons/Button";

import { Download, Share2 } from "lucide-react";

import type { Employee } from "../../types/Employee";

interface QRCardProps {
  employee: Employee;
  qrValue: string;
}

export default function QRCard({
  employee,
  qrValue,
}: QRCardProps) {
  return (
    <section
      className="
        mx-auto
        w-full
        max-w-md

        rounded-3xl
        bg-white

        p-8

        shadow-lg
      "
    >
      {/* Employee */}

      <div className="mt-8">

        <EmployeeInfo
          image={employee.profileImage}
          name={`${employee.firstName} ${employee.lastName}`}
          designation={employee.designation}
        />

      </div>
      {/* Title */}

      <div className="mb-8 text-center">

        <p className="mt-2 text-sm text-slate-500">
          Scan to view my digital business card
        </p>

      </div>

      {/* QR */}

      <QRPreview value={qrValue} />

      {/* Buttons */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <Button
          text="Share"
          icon={<Share2 size={18} />}
          variant="outline"
          color="primary"
          fullWidth
        />

        <Button
          text="Download"
          icon={<Download size={18} />}
          variant="filled"
          color="primary"
          fullWidth
        />

      </div>

    </section>
  );
}