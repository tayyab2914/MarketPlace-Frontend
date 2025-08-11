import { ROUTES } from "@/utils/Constants";
import { Menu, Popconfirm } from "antd";
import { Home, LayoutDashboard, Settings, LogOut } from "lucide-react";

export const HeaderMenu = (router, onLogout) => {
  const itemStyle = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
  };
  return (
    <Menu
      items={[
        {
          key: "home",
          label: (
            <span onClick={() => router.push(ROUTES.home)} style={itemStyle}>
              <Home size={16} />
              Home
            </span>
          ),
        },
        {
          key: "settings",
          label: (
            <span
              onClick={() => router.push(ROUTES.settings)}
              style={itemStyle}
            >
              <Settings size={16} />
              Settings
            </span>
          ),
        },
        {
          key: "dashboard",
          label: (
            <span
              onClick={() => router.push(ROUTES.Dashboard)}
              style={itemStyle}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </span>
          ),
        },
        {
          key: "logout",
          label: (
            <Popconfirm
              title="Are you sure you want to logout?"
              onConfirm={onLogout}
            >
              <span style={itemStyle}>
                <LogOut size={16} />
                Logout
              </span>
            </Popconfirm>
          ),
        },
      ]}
    />
  );
};
