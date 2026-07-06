
import { Outlet } from 'react-router'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { company } from '../data/company'

const EmployeeLayout = () => {
  return (
    <div>
        <Header
    companyLogo={company.logo}
    companyName={company.name}
/>
        <main className="min-h-[calc(100vh-64px)] bg-(--bg)">
            <Outlet />
        </main>
        <Footer company={company} />
    </div>
  )
}

export default EmployeeLayout
