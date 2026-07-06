import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div>
        <main className="min-h-[calc(100vh-64px)] bg-(--bg)">
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout