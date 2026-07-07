import type { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export default function FormSection({
  title,
  children,
}: FormSectionProps) {
  return (
    <section
      className="
        rounded-3xl

        bg-white

        p-8

        shadow-md
      "
    >
      <h2
        className="
          mb-6

          text-xl

          font-semibold
        "
      >
        {title}
      </h2>

      <div className="space-y-5">

        {children}

      </div>

    </section>
  );
}