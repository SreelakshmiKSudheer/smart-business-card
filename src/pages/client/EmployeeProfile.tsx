import HeroSection from "../../components/organisations/HeroSection";
import CompanyCard from "../../components/organisms/CompanyCard";
import LocationCard from "../../components/organisms/LocationCard";

import { employee } from "../../data/employee";
import { company } from "../../data/company";

export default function EmployeeProfile() {
  return (
    <main className="min-h-screen bg-slate-100 py-8 px-4">

      <div className="mx-auto max-w-7xl space-y-8">

        {/* ---------- HERO ---------- */}

        <HeroSection employee={employee} />

        {/* ---------- COMPANY + LOCATION ---------- */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          <CompanyCard company={company} />

          <LocationCard company={company} />

        </div>

      </div>

    </main>
  );
}