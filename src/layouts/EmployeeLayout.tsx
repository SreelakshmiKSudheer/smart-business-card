import { Outlet } from "react-router";
import { useState } from "react";

import EmployeeHeader from "../components/organisms/EmployeeHeader";
import NotificationDrawer from "../components/organisms/NotificationDrawer";
import FloatingQRButton from "../components/molecules/FloatingQRButton";

export default function EmployeeLayout() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <EmployeeHeader
        onNotificationClick={() => setIsNotificationOpen(true)}
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