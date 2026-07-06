import QRCode from "react-qr-code";

interface QRPreviewProps {
  value: string;
}

export default function QRPreview({
  value,
}: QRPreviewProps) {
  return (
    <div
      className="
        flex
        justify-center
      "
    >
      <div
        className="
          rounded-3xl
          bg-white
          p-6
          shadow-lg
        "
      >
        <QRCode
          value={value}
          size={220}
          bgColor="#ffffff"
          fgColor="#000000"
        />
      </div>
    </div>
  );
}