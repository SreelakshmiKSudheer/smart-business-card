import React from 'react'
import Button from '../../components/atoms/buttons/Button'
import { SquarePen } from 'lucide-react'
const Login = () => {
  return (
    <div>
      <Button text="Login" icon={<SquarePen />} iconPosition="right"  variant="outline" color="primary" size="md" />
    </div>
  )
}

export default Login
