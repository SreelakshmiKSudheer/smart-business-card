import { Outlet } from "react-router";
import Sidebar from "../components/organisms/sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">

      <main className="flex-1 overflow-auto p-6 bg-(--bg)">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;