'use client'
import { ROUTES } from "@/utils/Constants";
import { Popconfirm } from "antd";
import { LayoutDashboard, LogOut, MessageCircle, Settings, ShieldUser } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const itemStyle = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const NavActionOptions = ({ onLogout }) => {
  const router = useRouter();
  const { is_admin } = useSelector((state) => state.auth);

  const menuItems = [
    {
      key: "dashboard",
      label: (
        <span onClick={() => router.push(ROUTES?.Dashboard)} style={itemStyle}>
          <LayoutDashboard size={16} />
          Dashboard
        </span>
      ),
    },
    {
      key: "chat",
      label: (
        <span onClick={() => router.push(ROUTES?.Chat)} style={itemStyle}>
          <MessageCircle size={16} />
          Chat
        </span>
      ),
    },
    // Only include admin item if user is admin
    ...(is_admin ? [{
      key: "admin",
      label: (
        <span onClick={() => router.push(ROUTES?.admin)} style={itemStyle}>
          <ShieldUser size={16} />
          Admin Panel
        </span>
      ),
    }] : []),
    {
      key: "settings",
      label: (
        <span onClick={() => router.push(ROUTES?.settings)} style={itemStyle}>
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

  return menuItems;
};

export default NavActionOptions;
