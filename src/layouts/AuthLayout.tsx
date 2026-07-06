import React from 'react'
import { Outlet} from 'react-router'
import Footer from '../components/organisms/Footer'
import { company } from '../data/company'

const AuthLayout = () => {
  return (
    <div>
        <main>
            <Outlet />
        </main>
        <Footer company={company} />
    </div>
  )
}

export default AuthLayout
