import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export const sidebarItems = [
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