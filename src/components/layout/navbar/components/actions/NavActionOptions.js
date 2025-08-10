import { Popconfirm } from "antd";
import { LayoutDashboard, LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const itemStyle = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const NavActionOptions = ({ onLogout }) => {
  const router = useRouter();

  return [
    {
      key: "dashboard",
      label: (
        <span onClick={() => router.push("/dashboard")} style={itemStyle}>
          <LayoutDashboard size={16} />
          Dashboard
        </span>
      ),
    },
    {
      key: "settings",
      label: (
        <span onClick={() => router.push("/settings")} style={itemStyle}>
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
          onConfirm={onLogout}
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

export default NavActionOptions;
