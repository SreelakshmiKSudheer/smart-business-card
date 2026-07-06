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

  none:
    "border border-transparent bg-transparent",
};

export const colors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    filled:
      "bg-(--dominant) text-white hover:bg-(--dominant-alt)",

    outline:
      "border-(--dominant) text-(--dominant) hover:bg-(--dominant) hover:text-white",
  
    none:
      "text-(--dominant) hover:text-(--dominant-alt)"
    },

  secondary: {
    filled:
      "bg-(--text) text-(--bg) hover:bg-(--text-light) ",

    outline:
      "border-(--text) text-(--bg) hover:bg-(--text-light)",
 
    none:
      "text-(--text) hover:text-(--text-light)"
    },

  success: {
    filled:
      "bg-green-600 text-white hover:bg-green-700",

    outline:
      "border-green-600 text-green-600 hover:bg-green-50",

    none:
      "text-green-600 hover:text-green-700"
  },

  danger: {
    filled:
      "bg-red-600 text-white hover:bg-red-700",

    outline:
      "border-red-600 text-red-600 hover:bg-red-50",
    none:
      "text-red-600 hover:text-red-700"
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