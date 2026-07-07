import { Outlet, useLocation, useNavigate } from "react-router";
import { useState } from "react";

import EmployeeHeader from "../components/organisms/EmployeeHeader";
import NotificationDrawer from "../components/organisms/NotificationDrawer";

import { Bell, Pencil } from "lucide-react";

export default function EmployeeLayout() {
  const [isNotificationOpen, setIsNotificationOpen] =
    useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isQRPage = location.pathname === "/employee/qr";
  const isEditPage = location.pathname === "/employee/edit";

  return (
    <div className="min-h-screen bg-slate-100">

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
            {!isQRPage && !isEditPage && (
              <>
                <button
                  onClick={() =>
                    setIsNotificationOpen(true)
                  }
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
                  <Bell className="h-5 w-5" />
                </button>

                <button
                  onClick={() =>
                    navigate("/employee/edit")
                  }
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    hover:opacity-90
                  "
                  style={{ backgroundColor: "var(--dominant)" }}
                >
                  <Pencil className="h-5 w-5" />
                </button>
              </>
            )}

            {isEditPage && (
              <button
                onClick={() =>
                  window.dispatchEvent(
                    new Event("employee-save")
                  )
                }
                className="
                  rounded-xl
                  px-4
                  py-2
                  text-white
                  hover:opacity-90
                "
                style={{ backgroundColor: "var(--dominant)" }}
              >
                Save
              </button>
            )}
          </>
        }
      />

      <NotificationDrawer
        open={isNotificationOpen}
        onClose={() =>
          setIsNotificationOpen(false)
        }
      />

      <main className="pb-24">
        <Outlet />
      </main>
    </div>
  );
}