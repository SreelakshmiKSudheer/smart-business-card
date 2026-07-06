import HeroSection from "../../components/organisations/HeroSection";

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

        {/* Hero Section */}
        <HeroSection />

        {/* Company Section */}
        <section className="rounded-3xl bg-white p-8 shadow-md">

          <h2 className="mb-4 text-2xl font-semibold">
            About Tarento
          </h2>

          Company Section

        </section>

        {/* Map */}
        <section className="rounded-3xl bg-white p-8 shadow-md">

          <h2 className="mb-4 text-2xl font-semibold">
            Location
          </h2>

          Google Map

        </section>

        {/* Footer */}

        <footer className="pb-8 text-center text-gray-500">

          © 2026 Tarento Technologies Pvt. Ltd.

        </footer>

      </div>

    </main>
  );
}