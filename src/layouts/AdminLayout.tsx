import { Outlet } from "react-router";
import Sidebar from "../components/organisms/sidebar/Sidebar";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { company } from '../data/company'

const AdminLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-auto bg-(--bg) p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
        {/* <Footer company={company} /> */}
      </div>
    </div>
  );
};

export default AdminLayout;