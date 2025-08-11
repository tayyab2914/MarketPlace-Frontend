import { Home, LayoutDashboard, Settings, LogOut } from "lucide-react";
import { Popconfirm } from "antd";
import { ROUTES } from "@/utils/Constants";

export const getHeaderMenuItems = (router, logoutUser, onLogoutConfirm) => {
  const itemStyle = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
  };

  return [
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
      key: "dashboard",
      label: (
        <span onClick={() => router.push(ROUTES.Dashboard)} style={itemStyle}>
          <LayoutDashboard size={16} />
          Dashboard
        </span>
      ),
    },
    {
      key: "settings",
      label: (
        <span onClick={() => router.push(ROUTES.settings)} style={itemStyle}>
          <Settings size={16} />
          Settings
        </span>
      ),
    },
    {
      key: "logout",
      label: (
        <Popconfirm
          title="Are you sure you want to logout?"
          onConfirm={onLogoutConfirm}
          okText="Yes"
          cancelText="No"
          placement="left"
        >
          <span style={itemStyle}>
            <LogOut size={16} />
            Logout
          </span>
        </Popconfirm>
      ),
    },
  ];
};
