import { useState } from "react";
import { Mail, LockKeyhole, MoveRight } from "lucide-react";

import LabelInput from "../../molecules/LabelInput";
import CheckboxField from "../../molecules/CheckboxField";
import Button from "../../atoms/buttons";

import companyLogo from "../../../assets/images/tarento-logo.png";

export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      email,
      password,
      rememberMe,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto my-8 gap-4 px-6 py-8 w-full max-w-md rounded-xl bg-(--card) shadow-xl"
    >
      <img
        src={companyLogo}
        alt="Tarento Logo"
        className="mx-auto h-14"
      />

      <LabelInput
        label={{
          text: "Work Email",
          htmlFor: "email",
        }}
        input={{
          id: "email",
          name: "email",
          type: "email",
          placeholder: "admin@example.com",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true,
          icon: <Mail />,
        }}
      />

      <LabelInput
        label={{
          text: "Password",
          htmlFor: "password",
        }}
        input={{
          id: "password",
          name: "password",
          type: "password",
          placeholder: "********",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true,
          icon: <LockKeyhole />,
        }}
      />

      <CheckboxField
        label={{
          text: "Remember this device for 30 days",
        }}
        checkbox={{
          checked: rememberMe,
          onChange: (e) => setRememberMe(e.target.checked),
        }}
      />

      <Button
        type="submit"
        text="Login"
        icon={<MoveRight />}
        iconPosition="right"
        color="secondary"
        fullWidth
      />
    </form>
  );
};

export default LoginForm;