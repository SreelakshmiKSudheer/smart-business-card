interface MapCardProps {
  mapImage: string;
}

const MapCard = ({ mapImage }: MapCardProps) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
      "
    >
      <img
        src={mapImage}
        alt="Office Location"
        className="
          h-64
          w-full
          object-cover
        "
      />
    </div>
  );
};

export default MapCard;