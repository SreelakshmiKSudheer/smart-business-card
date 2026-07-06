import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const Input = ({ icon, className, ...props }: InputProps) => {
  return (
    <div className="flex items-center border border-(--dominant) rounded-md bg-(--bg)">
      {icon && (
        <div className="px-3 text-(--text-light)">
          {icon}
        </div>
      )}

      <input
        {...props}
        className={`w-full bg-transparent p-2 focus:outline-none text-(--text-light) placeholder-(--text-light) ${className ?? ""}`}
      />
    </div>
  );
};

export default Input;