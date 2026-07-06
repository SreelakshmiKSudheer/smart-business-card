import type { Company } from "../../types/Company";

import LocationInfo from "../molecules/LocationInfo";
import MapCard from "../molecules/MapCard";
import LocationActions from "../molecules/LocationActions";

interface LocationCardProps {
  company: Company;
}

const LocationCard = ({ company }: LocationCardProps) => {
  return (
    <section
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-md
      "
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* Left Side */}

        <div className="flex flex-col justify-between">

          <LocationInfo
            address={company.location.address}
            city={company.location.city}
            state={company.location.state}
            country={company.location.country}
          />

          <LocationActions
            googleMapsUrl={company.location.googleMapsUrl}
          />

        </div>

        {/* Right Side */}

        <MapCard
          mapImage={company.location.mapImage}
        />

      </div>
    </section>
  );
};

export default LocationCard;