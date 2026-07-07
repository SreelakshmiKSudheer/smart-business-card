import BusinessCardContent from "../../templates/BusinessCardContent";

interface BusinessCardProps {
  layout?: "mobile" | "desktop";
}

export default function BusinessCard({
  layout = "desktop",
}: BusinessCardProps) {
  return (
    <BusinessCardContent
      layout={layout}
    />
  );
}