import EmployeeEditForm from "../../components/organisms/EmployeeEditForm";
import PhonePreview from "../../components/organisms/PhonePreview";
import { employee as initialEmployee } from "../../data/employee";
import BusinessCard from "../../components/organisations/BusinessCard";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Modal from "../../components/molecules/Modal";
import { CircleCheckBig, CircleHelp } from "lucide-react";


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
<Modal
  open={showConfirm}
  icon={
    <CircleHelp
      size={56}
      className="text-amber-500"
    />
  }
  title="Submit Changes?"
  description="Are you sure you want to submit your profile changes? They will be sent to the administrator for approval."
  primaryText="Submit"
  secondaryText="Cancel"
  onPrimary={() => {
    setShowConfirm(false);

    setShowSuccess(true);
  }}
  onSecondary={() => setShowConfirm(false)}
/>

<Modal
  open={showSuccess}
  icon={
    <CircleCheckBig
      size={56}
      className="text-green-600"
    />
  }
  title="Changes Submitted"
  description="Your profile changes have been submitted successfully and are now awaiting administrator approval."
  primaryText="OK"
  onPrimary={() => {
    setShowSuccess(false);

    navigate("/employee/profile");
  }}
/>
    </main>
  );
}
