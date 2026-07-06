import HeroSection from "../../components/organisations/HeroSection";
import CompanyCard from "../../components/organisms/CompanyCard";
import { employee } from "../../data/employee";
import { company } from "../../data/company";

export default function EmployeeProfile() {
  return (
    <main className="min-h-screen bg-slate-100 py-8 px-4">

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">

        {/* Header */}

        <header className="flex h-20 items-center rounded-3xl bg-white px-8 shadow-md">

          <h1 className="text-3xl font-bold tracking-wide text-slate-800">
            TARENTO
          </h1>

        </header>

        {/* Hero */}

        <HeroSection employee={employee} />

        {/* Company */}

        <section className="rounded-3xl bg-white p-8 shadow-md">

          <CompanyCard company={company}/>

        </section>

        {/* Location */}

        <section className="rounded-3xl bg-white p-8 shadow-md">

          Google Map

        </section>

        {/* Footer */}

        <footer className="pb-8 text-center text-gray-500">

          © Tarento Technologies Pvt. Ltd.

        </footer>

      </div>

    </main>
  );
}