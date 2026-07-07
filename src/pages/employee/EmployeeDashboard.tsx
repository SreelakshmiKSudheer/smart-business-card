import BusinessCard from "../../components/organisations/BusinessCard";
import FloatingQRButton from "../../components/molecules/FloatingQRButton";

import PhonePreview from "../../components/organisms/PhonePreview";
import MobileBottomNavigation from "../../components/organisms/MobileBottomNavigation";
import AnalyticsCard from "../../components/organisms/AnalyticsCard";
import BusinessCardContent from "../../components/templates/BusinessCardContent";


export default function EmployeeDashboard() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* ---------------- MOBILE ---------------- */}

      <div className="lg:hidden">

        <div className="mx-auto w-full max-w-7xl px-4 py-5">

          <BusinessCard />

        </div>

        <FloatingQRButton />

      </div>

      {/* ---------------- DESKTOP ---------------- */}

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
        {/* Analytics */}

        <div className="lg:col-span-2">

          <AnalyticsCard />

        </div>

        {/* Phone Preview */}

       <PhonePreview>

    <div className="flex flex-col gap-6 p-4">

        <BusinessCardContent />

    </div>

    <MobileBottomNavigation
        active="card"
    />

</PhonePreview>

      </div>

    </main>
  );
}