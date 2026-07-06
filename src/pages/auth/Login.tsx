import React from 'react'
import Button from '../../components/atoms/buttons/Button'
import { SquarePen } from 'lucide-react'
import logoImg from '../../assets/images/logoImg.png'

const Login: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '16px' }}>
      {/* Heading and Paragraph Section */}
      <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={logoImg} alt="SBC Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          <span><strong>SBC</strong></span>
        </h1>
        <p style={{ color: '#4b5563' }}>Manage enterprise smart card entities</p>
      </div>

      {/* Button Section */}
      <div>
        <Button text="Login" icon={<SquarePen />} iconPosition="right" variant="outline" color="primary" size="md" />
      </div>
    </div>
  )
}

export default Login