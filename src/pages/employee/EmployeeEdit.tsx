import EmployeeEditForm from "../../components/organisms/EmployeeEditForm";

import PhonePreview from "../../components/organisms/PhonePreview";
import MobileBottomNavigation from "../../components/organisms/MobileBottomNavigation";
import { employee as initialEmployee } from "../../data/employee";
import BusinessCard from "../../components/organisations/BusinessCard";

import { useState } from "react";

export default function EmployeeEdit() {
  
  const [phoneScreen, setPhoneScreen] =
    useState<"card" | "qr">("card");
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

        <PhonePreview>

         <BusinessCard
    layout="mobile"
    employee={editedEmployee}
/>

          <MobileBottomNavigation
            active={phoneScreen}
            onChange={setPhoneScreen}
          />

        </PhonePreview>

      </div>

    </main>
  );
}

{/* <EmployeeHeader
  showBack
  title="Edit Profile"
  rightContent={
    <button
      className="
        rounded-xl
        bg-[var(--dominant)]
        px-4
        py-2
        text-white
      "
    >
      Save
    </button>
  }
/> */}
