import { ROUTES } from "@/utils/Constants";
import { Popconfirm } from "antd";
import { Home, LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NavActionOptions = ({ onLogout }) => {
  const router = useRouter();

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
