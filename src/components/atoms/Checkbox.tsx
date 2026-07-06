import type { InputHTMLAttributes } from "react";

export interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = (props: CheckboxProps) => {
  return <input type="checkbox" {...props} />;
};

export default Checkbox;