import React, { useState } from 'react'
import LabelInput from '../../molecules/LabelInput'
import { Mail, LockKeyhole, MoveRight } from  'lucide-react'
import Button from '../../atoms/buttons'
import CheckboxField from '../../molecules/CheckboxField'
import companyLogo from '../../../assets/images/tarento-logo.png'


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const emailProps = {
    label: {
      text: "Work Email",
      htmlFor: "email",
    },

    input: {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "admin@example.com",

      value: email,

      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),

      required: true,

      icon: <Mail />,
    },
  };
  const passwordProps = {
    label: {
      text: "Password",
      htmlFor: "password",
    },

    input: {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "********",

      value: password,

      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),

      required: true,

      icon: <LockKeyhole />,
    },
  };

  return (
    <form className="flex flex-col mx-auto my-8 gap-4 px-6 py-8 w-full md: max-w-md rounded-xl bg-(--card) shadow-xl">
      <img src={companyLogo} alt="Tarento Logo" className="mx-auto h-14" />
      <LabelInput label={emailProps.label} input={emailProps.input} />
      <LabelInput label={passwordProps.label} input={passwordProps.input} />
      <CheckboxField
          label={{
            text: "Remember this device for 30 days",
          }}
          checkbox={{
            checked: rememberMe,
            onChange: (e) => setRememberMe(e.target.checked),
          }}
        />
      <Button text="Login" icon={<MoveRight />} color="secondary" iconPosition="right" onClick={() => {console.log("Login button clicked")}} />
    </form>
  )
}

export default LoginForm
