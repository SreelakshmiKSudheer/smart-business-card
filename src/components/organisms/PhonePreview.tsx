import type { ReactNode } from "react";

interface PhonePreviewProps {
  children: ReactNode;
}

export default function PhonePreview({
  children,
}: PhonePreviewProps) {
  return (
    <div
      className="
        mx-auto

        w-[380px]

        rounded-[2.5rem]

        border-[10px]
        border-slate-900

        bg-white

        shadow-2xl

        overflow-hidden
      "
    >
      {/* Notch */}

      <div
        className="
          mx-auto
          mt-2

          h-6
          w-32

          rounded-full

          bg-slate-900
        "
      />

      {/* Screen */}

      <div
        className="
          h-[760px]

          overflow-y-auto

          bg-slate-100
        "
      >
        {children}
      </div>
    </div>
  );
}