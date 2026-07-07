import type { ButtonProps } from "./button.types";
import {
  variants,
  colors,
  sizes,
  directions,
} from "./buttonVariants";

const Button = ({
  text,
  icon,
  variant = "filled",
  size = "md",
  color = "primary",
  iconPosition = "left",
  iconDirection = "row",
  fullWidth = false,
  loading = false,
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        transition-all
        duration-200
        font-medium
        cursor-pointer

        ${variants[variant]}
        ${colors[color][variant]}
        ${sizes[size]}
        ${directions[iconDirection]}

        ${fullWidth ? "w-full" : ""}

        ${
          disabled || loading
            ? "opacity-60 cursor-not-allowed"
            : ""
        }

        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {iconPosition === "left" && icon}

          {text && <span>{text}</span>}

          {iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
};

export default Button;