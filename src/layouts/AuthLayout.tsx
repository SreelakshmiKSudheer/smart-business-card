import React from 'react'
import { Outlet} from 'react-router'
import Footer from '../components/organisms/Footer'
import { company } from '../data/company'

const AuthLayout = () => {
  return (
    <div>
        <main className="min-h-[calc(100vh-64px)] bg-(--bg)" >
            <Outlet />
        </main>
        <Footer company={company} />
    </div>
  )
}

export default AuthLayout
