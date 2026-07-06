import { Outlet, useLocation, useNavigate } from "react-router";
import { useState } from "react";

import EmployeeHeader from "../components/organisms/EmployeeHeader";
import NotificationDrawer from "../components/organisms/NotificationDrawer";
import { Bell, Pencil } from "lucide-react";


export default function EmployeeLayout() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isQRPage = location.pathname === "/employee/qr";
  const isEditPage = location.pathname === "/employee/edit";

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <EmployeeHeader
  logo={!isQRPage && !isEditPage}
  showBack={isQRPage || isEditPage}
  title={
    isQRPage
      ? "My QR"
      : isEditPage
      ? "Edit Profile"
      : undefined
  }
  rightContent={
    <>
      {/* Dashboard */}

      {!isQRPage && !isEditPage && (
        <>
          <button
            onClick={() => setIsNotificationOpen(true)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-slate-300
              bg-white
              hover:bg-slate-100
            "
          >
            <Bell size={18} />
          </button>

          <button
            onClick={() => navigate("/employee/edit")}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[var(--dominant)]
              text-white
              hover:bg-[var(--dominant-alt)]
            "
          >
            <Pencil size={18} />
          </button>
        </>
      )}

      {/* QR */}

      
      {/* Edit */}

      {isEditPage && (
        <button
          className="
            rounded-xl
            bg-[var(--dominant)]
            px-4
            py-2
            text-white
            hover:bg-[var(--dominant-alt)]
          "
        >
          Save
        </button>
      )}
    </>
  }
/>
      {/* Notification Drawer */}

      <NotificationDrawer
        open={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />

      {/* Page */}

      <main className="pb-24">
        <Outlet />
      </main>


    </div>
  );
}