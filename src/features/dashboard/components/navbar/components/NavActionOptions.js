import { useLogoutUser } from '@/hooks/useLogoutUser';
import useWindowWidth from '@/hooks/useWindowWidth';
import { ROUTES } from '@/utils/Constants';
import { Menu, Popconfirm } from 'antd';
import { Home, LogOut, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const NavActionOptions = () => {
    const router = useRouter();
    const { logoutUser } = useLogoutUser();
    const windowWidth = useWindowWidth();
  return(
    <Menu
      items={[
        {
          key: "home",
          label: (
            <span
              onClick={() => router.push(ROUTES.home)}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
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
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
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
              onConfirm={logoutUser}
              okText="Yes"
              cancelText="No"
              okButtonProps={{
                style: {
                  backgroundColor: "#0065ff",
                  color: "#fff",
                  border: "none",
                },
              }}
            >
              <span
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <LogOut size={16} />
                Logout
              </span>
            </Popconfirm>
          ),
        },
      ]}
    />
  );
}

export default NavActionOptions