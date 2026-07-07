import { NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  IdCard,
} from "lucide-react";
import { useState } from "react";
import companyLogo from "../../../assets/images/companyLogo.png";

import Button from "../../atoms/buttons";

const sidebarItems = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Employees",
    path: "/admin/employees",
    icon: Users,
  },
  {
    label: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
  {
    label: "Logout",
    path: "/login",
    icon: LogOut,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  // Desktop collapse state
  const [collapsed, setCollapsed] = useState(false);

  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      {/* Mobile Toggle Button */}
      <div className="fixed top-4 z-50 md:hidden">
        <Button
          variant="none"
          icon={<PanelLeftOpen className="h-6 w-6" />}
          onClick={() => setMobileOpen(true)}
        />
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static
          top-0 left-0 z-50
          h-screen
          bg-(--card)
          border-r border-(--border)
          transition-all duration-300
          flex flex-col

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }

          ${collapsed ? "md:w-20" : "md:w-60"}
          w-60
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          {!collapsed && (
            <div className="flex items-center gap-2 text-(--dominant)">
                <IdCard className="h-9 w-9 text-(--text)" />
                <h1 className="text-xl font-bold text-(--text)">
              SBC
            </h1>
            </div>
          )}

          {/* Desktop collapse button */}
          <div className="hidden md:block">
            <Button
              variant="none"
              icon={
                collapsed ? (
                  <PanelLeftOpen className="h-5 w-5" />
                ) : (
                  <PanelLeftClose className="h-5 w-5" />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>

          {/* Mobile close button */}
          <div className="md:hidden">
            <Button
              variant="none"
              icon={<PanelLeftClose className="h-5 w-5" />}
              onClick={() => setMobileOpen(false)}
            />
          </div>
        </div>

      {/* Navigation */}
      {!collapsed && <div className="flex justify-center">
        <img src={companyLogo} alt="Company Logo" className="w-4/5 h-auto p-4 text-center" />
      </div>}

      <nav className="flex flex-col gap-2 px-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
            >
              {({ isActive }) => (
                <Button
                  fullWidth
                  icon={<Icon className="h-5 w-5" />}
                  text={collapsed ? undefined : item.label}
                  iconPosition="left"
                  variant={isActive ? "filled" : "none"}
                  color="primary"
                  className={`
                    justify-start
                    ${collapsed ? "justify-center px-0" : ""}
                  `}
                  onClick={() => {
                    if (item.label === "Logout") {
                      navigate("/login");
                    }
                  }}
                />
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
    </div>
  );
};

export default Sidebar;