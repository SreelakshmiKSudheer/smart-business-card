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
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      className={`
        flex
        items-center
        justify-center
        gap-2
        rounded-lg
        transition
        duration-200

        ${variants[variant]}
        ${colors[color][variant]}
        ${sizes[size]}
        ${directions[iconDirection]}

        ${fullWidth ? "w-full" : ""}

        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {icon && iconPosition === "left" && icon}

          {text && (
            <span>
              {text}
            </span>
          )}

          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
};

export default Button;