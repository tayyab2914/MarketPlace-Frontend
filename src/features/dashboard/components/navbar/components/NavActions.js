import React from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "antd";
import { Bell } from "lucide-react";
import NavActionOptions from "./NavActionOptions";
import { BACKEND_DOMAIN } from "@/utils/Constants";
import { useLogoutUser } from "@/hooks/useLogoutUser";

const NavActions = () => {
  const { is_user_logged_in } = useSelector((state) => state.auth);
  const { company_info } = useSelector((state) => state.company);
  const { logoutUser } = useLogoutUser();

  // Get the menu items array and pass logout function
  const menuItems = NavActionOptions({ onLogout: logoutUser });

  return (
    <div className="dsh-nav-a-container">
      {is_user_logged_in && (
        <>
          <div className={"dsh-nav-notificationWrapper"}>
            <Bell className={"dsh-nav-notificationIcon"} />
            <span className={"dsh-nav-notificationBadge"}></span>
          </div>

          <Dropdown
            menu={{ items: menuItems }}
            trigger={["click"]}
            placement="bottomRight"
            arrow
          >
            <div className={"dsh-nav-userAvatar"} style={{ cursor: "pointer" }}>
              <img
                src={`${BACKEND_DOMAIN}${company_info?.profile_image}`}
                alt="User Avatar"
                className={"dsh-nav-avatarImage"}
              />
            </div>
          </Dropdown>
        </>
      )}
    </div>
  );
};

export default NavActions;
