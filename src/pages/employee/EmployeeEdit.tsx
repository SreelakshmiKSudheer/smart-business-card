import EmployeeEditForm from "../../components/organisms/EmployeeEditForm";
import PhonePreview from "../../components/organisms/PhonePreview";
import { employee as initialEmployee } from "../../data/employee";
import BusinessCard from "../../components/organisations/BusinessCard";
import { useState } from "react";

export default function EmployeeEdit() {
  
const [editedEmployee, setEditedEmployee] =
  useState(initialEmployee);
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

    </main>
  );
}
