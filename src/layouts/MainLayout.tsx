import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout
