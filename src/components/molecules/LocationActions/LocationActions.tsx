import Button from "../../atoms/buttons/Button";
import { Navigation } from "lucide-react";

interface LocationActionsProps {
  googleMapsUrl: string;
}

const LocationActions = ({
  googleMapsUrl,
}: LocationActionsProps) => {

  const openMaps = () => {
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="mt-6">

      <Button
        text="Open in Google Maps"
        icon={<Navigation size={18} />}
        variant="filled"
        color="primary"
        fullWidth
        onClick={openMaps}
      />

    </div>
  );
};

export default LocationActions;