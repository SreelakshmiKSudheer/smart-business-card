import { Navigate, Route, Routes } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import EmployeeLayout from '../layouts/EmployeeLayout'
import AdminLayout from '../layouts/AdminLayout'
import Login from '../pages/auth/Login'
import EmployeeProfile from '../pages/client/EmployeeProfile'
import EmployeeDashboard from '../pages/employee/EmployeeDashboard'
import EmployeeQR from '../pages/employee/EmployeeQR'
import EmployeeEdit from '../pages/employee/EmployeeEdit'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminEmployees from '../pages/admin/AdminEmployees'
import AdminEmployee from '../pages/admin/AdminEmployee'
import AdminSettings from '../pages/admin/AdminSettings'
import PublicLayout from '../layouts/PublicLayout'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PublicLayout/>}>
            <Route path="/:employeeName" element={<EmployeeProfile />} />
        </Route>
        <Route element={<EmployeeLayout/>}>
            <Route path="employee/profile" element={<EmployeeDashboard />} />
            <Route path="employee/qr" element={<EmployeeQR />} />
            <Route path="employee/edit" element={<EmployeeEdit />} />
        </Route>
        <Route element={<AdminLayout/>}>
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            <Route path="admin/employees" element={<AdminEmployees />} />
            <Route path="admin/employees/:employeeId" element={<AdminEmployee />} />
            <Route path="admin/settings" element={<AdminSettings />} />
            <Route path="admin/profile" element={<EmployeeDashboard />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
