import React from 'react'
import { Outlet} from 'react-router'
import Footer from '../components/organisms/Footer'

const AuthLayout = () => {
  return (
    <div>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default AuthLayout
