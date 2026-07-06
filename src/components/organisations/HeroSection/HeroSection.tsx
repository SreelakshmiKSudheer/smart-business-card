import EmployeeCard from "../../organisms/EmployeeCard";
  
export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">

      {/* Left */}

      <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-md">

        <EmployeeCard />

      </div>

      {/* Right */}

      <div className="rounded-3xl bg-white p-8 shadow-md">

        Core Expertise

      </div>

    </section>
  );
}