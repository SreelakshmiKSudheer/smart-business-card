import { Outlet } from "react-router";
import Sidebar from "../components/organisms/sidebar/Sidebar";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { company } from '../data/company'

const AdminLayout = () => {
  return (
    <div className="flex h-screen">

      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6 bg-(--bg) w-full">
          <Outlet />
        </main>
        {/* <Footer company={company} /> */}
      </div>
    </div>
  );
};

export default AdminLayout;