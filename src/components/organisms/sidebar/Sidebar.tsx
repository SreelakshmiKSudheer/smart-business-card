import { NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";

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

  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        h-screen
        bg-(--card)
        border-r
        border-(--border)
        transition-all
        duration-300
        flex
        flex-col
        ${collapsed ? "w-20" : "w-72"}
      `}
    >
      {/* Header */}

      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <h1 className="text-xl font-bold text-(--text)">
            Admin
          </h1>
        )}

        <Button
          variant="none"
          icon={
            collapsed ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* Navigation */}

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
                  icon={<Icon size={20} />}
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
  );
};

export default Sidebar;