import { useNavigate } from "react-router";
import logoImg from '../../assets/images/logoImg.png'
import LoginForm from "../../components/organisms/forms/LoginForm";
import { adminCredentials, employeeCredentials } from "../../data/loginCredentials";

export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (data: LoginFormData) => {
    console.log("Login Data:", data);

    // Temporary authentication logic
    if (
      data.email === adminCredentials.email &&
      data.password === adminCredentials.password
    ) {
      navigate("/admin/dashboard");
    } else if (
      data.email === employeeCredentials.email &&
      data.password === employeeCredentials.password
    ) {
      navigate("/employee/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (

    <div className="flex flex-col items-center justify-center h-full p-10 bg-(--bg)">
      {/* Heading and Paragraph Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl text-(--text) font-bold mb-2 flex items-center gap-2"
        >
          <img src={logoImg} alt="SBC Logo" className="w-8 h-8 object-contain" />
          <span><strong>SBC</strong></span>
        </h1>
        <p className="text-(--text-light)">Manage enterprise smart card entities</p>
      </div>
      <LoginForm onSubmit={handleLogin} />
      </div>
      );
};

export default Login;