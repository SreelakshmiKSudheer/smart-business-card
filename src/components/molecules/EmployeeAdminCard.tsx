import React from "react";
import { useNavigate } from "react-router";

export type EmployeeAdminCardProps = {
  name: string;
  role: string;
  designation: string;
  image: string;
  imageAlt?: string;
  coverGradient?: string;
  onClick?: () => void;
}

const EmployeeAdminCard = ({
  name,
  role,
  designation,
  image,
  imageAlt = "Employee",
  coverGradient = "from-(--text) to-(--text-light)",
}: EmployeeAdminCardProps) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/admin/employees/profile")}
      className="w-40 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
    >
      {/* Cover */}
      <div className={`h-16 bg-gradient-to-r ${coverGradient}`} />

      {/* Profile */}
      <div className="-mt-8 flex flex-col items-center px-4 pb-4">
        <img
          src={image}
          alt={imageAlt}
          className="h-16 w-16 rounded-xl border-4 border-white object-cover shadow-md"
        />

        <h3 className="mt-3 text-lg font-semibold text-(--text) text-center">
          {name}
        </h3>

        <span className="mt-2 rounded-full bg-(--bg) px-3 py-1 text-xs font-medium text-(--dominant)">
          {role}
        </span>

        <p className="mt-2 text-center text-sm text-(--text-light)">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default EmployeeAdminCard;