import { useLogoutUser } from "@/hooks/useLogoutUser";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { Popconfirm, Dropdown } from "antd";
import {
  User2,
  LogOut,
  ClipboardPlus,
  UserPlus,
  LogIn,
  Briefcase,
} from "lucide-react";
import useWindowWidth from "@/hooks/useWindowWidth";

const NavActions = () => {
  const router = useRouter();
  const { is_user_logged_in } = useSelector((state) => state.auth);
  const { logoutUser } = useLogoutUser();
  const windowWidth = useWindowWidth();

  const menuItems = [
    {
      key: "postTask",
      label: (
        <a
          onClick={() => router.push(ROUTES.createListing)}
          className="nav-a-item"
        >
          <ClipboardPlus size={16} style={{ marginRight: 8 }} />
          Post a Task
        </a>
      ),
    },
    {
      key: "dashboard",
      label: (
        <a onClick={() => router.push(ROUTES.Dashboard)} className="nav-a-item">
          <Briefcase size={16} style={{ marginRight: 8 }} />
          Dashboard
        </a>
      ),
    },
    !is_user_logged_in
      ? {
          key: "signup",
          label: (
            <a
              onClick={() => router.push(ROUTES.signup)}
              className="nav-a-item"
            >
              <UserPlus size={16} style={{ marginRight: 8 }} />
              Sign up
            </a>
          ),
        }
      : {
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
              <span className="nav-a-item">
                <LogOut size={16} style={{ marginRight: 8 }} />
                Logout
              </span>
            </Popconfirm>
          ),
        },
    !is_user_logged_in && {
      key: "signin",
      label: (
        <a onClick={() => router.push(ROUTES.signin)} className="nav-a-item">
          <LogIn size={16} style={{ marginRight: 8 }} />
          Sign in
        </a>
      ),
    },
  ].filter(Boolean);

  return (
    <div className="nav-a-container">
      {windowWidth < 992 ? (
        <Dropdown
          menu={{ items: menuItems }}
          trigger={["click"]}
          className="nav-a-dropdown"
        >
          <User2 className="nav-a-dropdown-icon" size={26} strokeWidth={2} />
        </Dropdown>
      ) : (
        <>
          <ul className="nav-a-list">
            {!is_user_logged_in && (
              <>
                <li>
                  <a
                    onClick={() => router.push(ROUTES.signup)}
                    className="nav-a-link"
                  >
                    Sign up
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push(ROUTES.signin)}
                    className="nav-a-link"
                  >
                    Sign in
                  </a>
                </li>
              </>
            )}
          </ul>

          <div className="nav-a-buttons">
            <a
              onClick={() => router.push(ROUTES.createListing)}
              className="nav-a-post-task-btn"
            >
              <span className="nav-a-post-task-text">Post a Task</span>
              <i className="ph-bold ph-plus nav-a-post-task-icon"></i>
            </a>
            <a
              onClick={() => router.push(ROUTES.Dashboard)}
              className="nav-a-tasker-btn"
            >
              <span className="nav-a-tasker-text">Dashboard</span>
            </a>
          </div>
          {is_user_logged_in && (
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
              <span className="nav-a-item nav-logout-icon">
                <LogOut size={24} style={{ marginRight: 8 }} />
              </span>
            </Popconfirm>
          )}
        </>
      )}
    </div>
  );
};

export default NavActions;
