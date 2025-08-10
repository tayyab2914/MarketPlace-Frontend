import React from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "antd";
import { LayoutDashboard, Plus, User, User2, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLogoutUser } from "@/hooks/useLogoutUser";
import useWindowWidth from "@/hooks/useWindowWidth";
import { ROUTES, BACKEND_DOMAIN } from "@/utils/Constants";
import { IMAGES } from "@/components/ui/Image/ImageData";
import Button from "@/components/ui/Button/Button";
import NavActionOptions from "./NavActionOptions";

const NavActions = () => {
  const router = useRouter();
  const { is_user_logged_in } = useSelector((state) => state.auth);
  const { company_info } = useSelector((state) => state.company);
  const { logoutUser } = useLogoutUser();
  const windowWidth = useWindowWidth();

  const itemStyle = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
  };

  const actionBtnStyles = {
    padding: "0px",
    minWidth: "160px",
    margin: "0",
  };

  if (windowWidth < 992) {
    return (
      <Dropdown
        menu={{
          items: is_user_logged_in
            ? NavActionOptions({ onLogout: logoutUser })
            : [
                {
                  key: "signin",
                  label: (
                    <span
                      onClick={() => router.push(ROUTES.signin)}
                      style={itemStyle}
                    >
                      <User size={16} />
                      Sign in
                    </span>
                  ),
                },
                {
                  key: "signup",
                  label: (
                    <span
                      onClick={() => router.push(ROUTES.signup)}
                      style={itemStyle}
                    >
                      <UserPlus size={16} />
                      Sign up
                    </span>
                  ),
                },
              ],
        }}
        trigger={["click"]}
      >
        <User2 className="nav-a-dropdown-icon" size={26} strokeWidth={2} />
      </Dropdown>
    );
  }

  return (
    <div className="nav-a-container">
      {!is_user_logged_in && (
        <ul className="nav-a-list">
          <Button
            variant="filled-animated"
            onClick={() => router.push(ROUTES.signup)}
            style={actionBtnStyles}
          >
            Sign up
          </Button>

          <Button
            variant="filled-animated-light"
            onClick={() => router.push(ROUTES.signin)}
            style={actionBtnStyles}
          >
            Sign in
          </Button>
        </ul>
      )}
      {is_user_logged_in && (
        <>
          <div className="nav-a-buttons">
            <Button
              variant="filled-animated"
              onClick={() => router.push(ROUTES.createListing)}
              style={actionBtnStyles}
            >
              Post a Task <Plus size={22} />
            </Button>

            <Button
              variant="filled-animated-light"
              onClick={() => router.push(ROUTES.Dashboard)}
              style={actionBtnStyles}
            >
              Dashboard <LayoutDashboard size={22} />
            </Button>
          </div>
          <Dropdown
            menu={{ items: NavActionOptions({ onLogout: logoutUser }) }}
            trigger={["click"]}
            placement="bottomRight"
            arrow
          >
            <img
              src={
                company_info?.profile_image
                  ? `${BACKEND_DOMAIN}${company_info.profile_image}`
                  : IMAGES?.user
              }
              className="nav-a-profile-avatar"
              alt="Profile Avatar"
            />
          </Dropdown>
        </>
      )}
    </div>
  );
};

export default NavActions;
