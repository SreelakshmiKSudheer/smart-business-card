import type { Company } from "../../../types/Company";

interface CompanyBannerProps {
    company: Company;
}

const CompanyBanner = ({ company }: CompanyBannerProps) => {
    return (
        <div
  className="
    relative
    overflow-hidden
    rounded-3xl
    shadow-md
    aspect-[4/3]
  "
>
            <img
                src={company.bannerImage}
                alt={company.name}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-slate-900/70
                    via-slate-900/30
                    to-transparent
                "
            />

            <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">

                <h2 className="text-4xl font-bold">
                    {company.name}
                </h2>

                <p className="mt-2 text-lg">
                    {company.tagline}
                </p>

            </div>
        </div>
    );
};

export default CompanyBanner;