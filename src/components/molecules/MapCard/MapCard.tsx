interface MapCardProps {
  embedUrl: string;
}

const MapCard = ({ embedUrl }: MapCardProps) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        shadow-sm
      "
    >
      <iframe
        src={embedUrl}
        title="Company Location"
        width="100%"
        height="350"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
        style={{ border: 0 }}
      />
    </div>
  );
};

export default MapCard;