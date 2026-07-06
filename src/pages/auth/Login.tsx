import React from 'react'

import logoImg from '../../assets/images/logoImg.png'
import LoginForm from '../../components/organisms/forms/LoginForm'

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--bg)">
      {/* Heading and Paragraph Section */}
      <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={logoImg} alt="SBC Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          <span><strong>SBC</strong></span>
        </h1>
        <p style={{ color: '#4b5563' }}>Manage enterprise smart card entities</p>
      </div>


       <LoginForm />
      </div>
  )
}
export default Login