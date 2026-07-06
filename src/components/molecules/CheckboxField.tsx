import Checkbox, { type CheckboxProps } from "../atoms/Checkbox";
import Label, { type LabelProps } from "../atoms/Label";

type CheckboxFieldProps = {
  label: LabelProps;
  checkbox: CheckboxProps;
};

const CheckboxField = ({
  label,
  checkbox,
}: CheckboxFieldProps) => {
    
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox {...checkbox} />
      <span>{label.text}</span>
    </label>
  );
};

export default CheckboxField;