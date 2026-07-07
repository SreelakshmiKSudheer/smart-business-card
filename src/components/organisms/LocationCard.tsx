import type { Company } from "../../types/Company";

import LocationInfo from "../molecules/LocationInfo";
import MapCard from "../molecules/MapCard";

interface LocationCardProps {
  company: Company;
  layout?: "mobile" | "desktop";
}

const LocationCard = ({
  company,
  layout = "desktop",
}: LocationCardProps) => {
  return (
    <section
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-md
      "
    >
      <div
        className={
          layout === "mobile"
            ? "flex flex-col gap-6"
            : "grid grid-cols-1 gap-8 lg:grid-cols-2"
        }
      >
        {/* Address */}

        <LocationInfo
          address={company.location.address}
          city={company.location.city}
          state={company.location.state}
          country={company.location.country}
        />

        {/* Map */}

        <MapCard
          embedUrl={company.location.embedUrl}
        />
      </div>
    </section>
  );
};

export default LocationCard;