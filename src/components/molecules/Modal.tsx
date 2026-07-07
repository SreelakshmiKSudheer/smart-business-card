import type { ReactNode } from "react";

import Button from "../atoms/buttons/Button";

interface ModalProps {
  open: boolean;

  icon?: ReactNode;

  title: string;

  description: string;

  primaryText: string;

  secondaryText?: string;

  onPrimary: () => void;

  onSecondary?: () => void;
}

export default function Modal({
  open,
  icon,
  title,
  description,
  primaryText,
  secondaryText,
  onPrimary,
  onSecondary,
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/40

        p-4
      "
    >
      <div
        className="
          w-full
          max-w-md

          rounded-3xl

          bg-white

          p-6
          sm:p-8

          shadow-2xl
        "
      >
        <div className="text-center">

          {icon && (
            <div className="mb-5 flex justify-center">
              {icon}
            </div>
          )}

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p
            className="
              mt-3

              text-sm

              text-slate-600
            "
          >
            {description}
          </p>

        </div>

<div
  className="
    mt-8

    flex
    flex-col
    items-center
    justify-center

    gap-3

    sm:flex-row
    sm:justify-center
  "
>
          {secondaryText && onSecondary && (
           <Button
  text={secondaryText}
  variant="outline"
  onClick={onSecondary}
  className="min-w-32"
/>
          )}

          <Button
  text={primaryText}
  onClick={onPrimary}
  className="min-w-32"
/>

        </div>

      </div>
    </div>
  );
}