import BusinessCard from "../../components/organisations/BusinessCard";
import FloatingQRButton from "../../components/molecules/FloatingQRButton";
export default function EmployeeDashboard() {
  return (
    <main className="relative min-h-screen bg-slate-100">
      
      <div className="mx-auto w-full max-w-7xl px-4 py-5">
    <BusinessCard
/>
</div>
{/* Floating QR */}

      <FloatingQRButton />

    </main>
  );
}