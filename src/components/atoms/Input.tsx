import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactNode;
  isTextArea?: boolean;
}

const Input = ({ icon, className, isTextArea, ...props }: InputProps & TextAreaProps) => {
  if (isTextArea) {
    return (
      <div className="flex items-start border border-(--dominant) rounded-md bg-(--bg)">
        {icon && (
          <div className="px-3 pt-2 text-(--text-light)">
            {icon}
          </div>
        )}

        <textarea
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`w-full bg-transparent p-2 focus:outline-none text-(--text-light) placeholder-(--text-light) ${className ?? ""}`}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center border border-(--dominant) rounded-md bg-(--bg)">
      {icon && (
        <div className="px-3 text-(--text-light)">
          {icon}
        </div>
      )}

      <input
  {...props}
  className={`
    w-full
    p-2
    focus:outline-none
    placeholder-(--text-light)

    ${
      props.readOnly
        ? "cursor-not-allowed bg-slate-100 text-slate-500"
        : "bg-transparent text-(--text-light)"
    }

    ${className ?? ""}
  `}
/>
    </div>
  );
};

export default Input;