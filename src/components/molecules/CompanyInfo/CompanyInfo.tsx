import type { Company } from "../../../types/Company";

interface CompanyInfoProps {
  company: Company;
}

export default function CompanyInfo({
  company,
}: CompanyInfoProps) {
  return (
    <div className="flex flex-col items-center text-center">

      <img
        src={company.logo}
        alt={company.name}
        className="mb-5 h-20 object-contain"
      />

      <h2 className="text-2xl font-bold">

        {company.name}

      </h2>

      <p className="mt-2 text-lg text-teal-700">

        {company.tagline}

      </p>

      <p className="mt-5 text-slate-600">

        {company.description}

      </p>

    </div>
  );
}