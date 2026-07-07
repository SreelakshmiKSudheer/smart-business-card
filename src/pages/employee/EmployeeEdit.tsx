import EmployeeEditForm from "../../components/organisms/EmployeeEditForm";
import PhonePreview from "../../components/organisms/PhonePreview";
import { employee as initialEmployee } from "../../data/employee";
import BusinessCard from "../../components/organisations/BusinessCard";
import ConfirmationModal from "../../components/molecules/ConfirmationModal";
import SuccessModal from "../../components/molecules/SuccessModal";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function EmployeeEdit() {
  const navigate = useNavigate();
const [editedEmployee, setEditedEmployee] =
  useState(initialEmployee);
  const [showConfirm, setShowConfirm] = useState(false);
useEffect(() => {
  const handleSave = () => {
    setShowConfirm(true);
  };

  window.addEventListener(
    "employee-save",
    handleSave
  );

  return () =>
    window.removeEventListener(
      "employee-save",
      handleSave
    );
}, []);
const [showSuccess, setShowSuccess] = useState(false);
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Mobile */}

      <div className="lg:hidden px-4 py-5">

        <EmployeeEditForm
  employee={editedEmployee}
  setEmployee={setEditedEmployee}
/>

      </div>

      {/* Desktop */}

      <div
  className="
    hidden
    lg:grid
    lg:grid-cols-3
    gap-8

    max-w-7xl
    mx-auto

    items-start

    px-8
    py-8
  "
>
        {/* Form */}

        <div className="lg:col-span-2">

          <EmployeeEditForm
    employee={editedEmployee}
    setEmployee={setEditedEmployee}
/>

        </div>

        {/* Preview */}

       {/* Preview */}

<div
  className="
    sticky
    top-24
    self-start
    h-fit
  "
>
  <PhonePreview>

    <BusinessCard
      layout="mobile"
      employee={editedEmployee}
    />

  </PhonePreview>
</div>

      </div>
<ConfirmationModal
  open={showConfirm}
  onCancel={() => setShowConfirm(false)}
  onConfirm={() => {
    setShowConfirm(false);

    // Later we'll call the API here

    setShowSuccess(true);
  }}
/>

<SuccessModal
  open={showSuccess}
  onClose={() => {
    setShowSuccess(false);

    navigate("/employee/profile");
  }}
/>

    </main>
  );
}
