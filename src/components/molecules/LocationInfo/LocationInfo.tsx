interface LocationInfoProps {
  address: string;
  city: string;
  state: string;
  country: string;
}

const LocationInfo = ({
  address,
  city,
  state,
  country,
}: LocationInfoProps) => {
  return (
    <div className="space-y-2">

      <h2 className="text-2xl font-semibold text-slate-800">
        Visit Us
      </h2>

      <p className="text-slate-700 font-medium">
        {address}
      </p>

      <p className="text-slate-500">
        {city}, {state}
      </p>

      <p className="text-slate-500">
        {country}
      </p>

    </div>
  );
};

export default LocationInfo;