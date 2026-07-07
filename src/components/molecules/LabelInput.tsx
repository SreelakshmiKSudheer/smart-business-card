import Label from "../atoms/Label";
import Input, { type InputProps, type TextAreaProps } from "../atoms/Input";
import type { LabelProps } from "../atoms/Label";

type LabelInputProps = {
  label: LabelProps;
  input: InputProps & TextAreaProps;
};

const LabelInput = ({ label, input }: LabelInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label {...label} />
      <Input {...input} />
    </div>
  );
};

export default LabelInput;