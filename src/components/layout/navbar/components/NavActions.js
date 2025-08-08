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
          className="nav-dropdown-item"
        >
          <ClipboardPlus size={16} style={{ marginRight: 8 }} />
          Post a Task
        </a>
      ),
    },
    {
      key: "becomeTasker",
      label: (
        <a
          onClick={() => router.push(ROUTES.listOffers)}
          className="nav-dropdown-item"
        >
          <Briefcase size={16} style={{ marginRight: 8 }} />
          Become a Tasker
        </a>
      ),
    },
    !is_user_logged_in
      ? {
          key: "signup",
          label: (
            <a
              onClick={() => router.push(ROUTES.signup)}
              className="nav-dropdown-item"
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
              <span className="nav-dropdown-item">
                <LogOut size={16} style={{ marginRight: 8 }} />
                Logout
              </span>
            </Popconfirm>
          ),
        },
    !is_user_logged_in && {
      key: "signin",
      label: (
        <a
          onClick={() => router.push(ROUTES.signin)}
          className="nav-dropdown-item"
        >
          <LogIn size={16} style={{ marginRight: 8 }} />
          Sign in
        </a>
      ),
    },
  ].filter(Boolean);

  return (
    <div className="nav-actions-container">
      {windowWidth < 992 ? (
        <Dropdown
          menu={{ items: menuItems }}
          trigger={["click"]}
          className="nav-actions-dropdown"
        >
          <User2
            className="nav-actions-dropdown-icon"
            size={26}
            strokeWidth={2}
          />
        </Dropdown>
      ) : (
        <>
          <ul className="nav-actions-list">
            {!is_user_logged_in && (
              <>
                <li>
                  <a
                    onClick={() => router.push(ROUTES.signup)}
                    className="nav-link"
                  >
                    Sign up
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => router.push(ROUTES.signin)}
                    className="nav-link"
                  >
                    Sign in
                  </a>
                </li>
              </>
            )}
          </ul>

          <div className="nav-actions-buttons">
            <a
              onClick={() => router.push(ROUTES.createListing)}
              className="nav-post-task-btn"
            >
              <span className="nav-post-task-text">Post a Task</span>
              <i className="ph-bold ph-plus nav-post-task-icon"></i>
            </a>
            <a
              onClick={() => router.push(ROUTES.listOffers)}
              className="nav-tasker-btn"
            >
              <span className="nav-tasker-text">Become a Tasker</span>
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
              <span className="nav-dropdown-item nav-logout-icon">
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
