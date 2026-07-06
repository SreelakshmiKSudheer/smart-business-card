import EmployeeHeader from '../components/organisms/EmployeeHeader'
import { Outlet } from 'react-router'


const EmployeeLayout = () => {
  return (
    <div>
        <EmployeeHeader/>
        <main className="min-h-[calc(100vh-64px)] bg-(--bg)">
            <Outlet />
        </main>
    </div>
  )
}

export default EmployeeLayout
