
import { Outlet } from 'react-router'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { company } from '../data/company'

const MainLayout = () => {
  return (
    <div>
        <Header
    companyLogo={company.logo}
    companyName={company.name}
/>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout
