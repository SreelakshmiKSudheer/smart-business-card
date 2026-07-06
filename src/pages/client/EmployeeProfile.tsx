import HeroSection from "../../components/organisations/HeroSection";
import CompanyCard from "../../components/organisms/CompanyCard";
import LocationCard from "../../components/organisms/LocationCard";
import { employee } from "../../data/employee";
import { company } from "../../data/company";


export default function EmployeeProfile() {
  return (
    <main className="min-h-screen bg-slate-100 py-8 px-4">

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">

        {/* Hero */}

        <HeroSection employee={employee} />

        {/* Company */}
      
          <CompanyCard company={company}/>

        {/* Location */}

        <LocationCard company={company} />

      </div>

    </main>
  );
}