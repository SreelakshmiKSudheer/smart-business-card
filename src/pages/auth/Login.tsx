import logoImg from '../../assets/images/logoImg.png'
import LoginForm from '../../components/organisms/forms/LoginForm'

const Login = () => {
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
       <LoginForm />
      </div>
  )
}

export default Login
