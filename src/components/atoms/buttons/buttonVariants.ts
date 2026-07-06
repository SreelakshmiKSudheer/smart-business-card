import type {
    ButtonColor,
    ButtonDirection,
    ButtonSize,
    ButtonVariant,
} from "./button.types";

export const variants: Record<ButtonVariant, string> = {
  filled:
    "border border-transparent",

  outline:
    "border border-2 bg-transparent",
};

export const colors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    filled:
      "bg-(--dominant) text-white hover:bg-(--dominant-alt)",

    outline:
      "border-(--dominant) text-(--dominant) hover:bg-(--dominant) hover:text-white",
  },

  secondary: {
    filled:
      "bg-(--text) text-(--bg) hover:bg-(--text-light) ",

    outline:
      "border-(--text) text-(--bg) hover:bg-(--text-light)",
  },

  success: {
    filled:
      "bg-green-600 text-white hover:bg-green-700",

    outline:
      "border-green-600 text-green-600 hover:bg-green-50",
  },

  danger: {
    filled:
      "bg-red-600 text-white hover:bg-red-700",

    outline:
      "border-red-600 text-red-600 hover:bg-red-50",
  },
};

export const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",

  md: "px-5 py-2 text-base",

  lg: "px-6 py-3 text-lg",
};

export const directions: Record<ButtonDirection, string> = {
  row: "flex-row",
  col: "flex-col",
};