// ChatHeader.jsx
import { IMAGES } from "@/components/ui/Image/ImageData";
import { BACKEND_DOMAIN } from "@/utils/Constants";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Drawer } from "antd";
import SideBar from "../../sidebar/SideBar";
import useWindowWidth from "@/hooks/useWindowWidth";

const ChatHeader = ({ userData }) => {
  const { other_user = {} } = userData || {};
  const [drawerOpen, setDrawerOpen] = useState(false);
  const windowWidth = useWindowWidth();

  return (
    <>
      <div className="chat-c-header">
        <div className="chat-c-header-left">
          {windowWidth < 992 && (
            <Menu
              className="chat-c-header-siderbar-toggle-icon"
              onClick={() => setDrawerOpen(true)}
              size={30}
            />
          )}
          <img
            alt="user avatar"
            className="chat-c-avatar-lg"
            src={
              other_user?.company_profile_image
                ? `${BACKEND_DOMAIN}${other_user?.company_profile_image}`
                : IMAGES?.user
            }
          />
          <div>
            <p className="chat-c-xl-body">{other_user?.company_name}</p>
          </div>
        </div>
        <div>
          <i className="ph ph-phone chat-c-icon"></i>
          <i className="ph ph-video-camera chat-c-icon"></i>
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={false}
        className="chat-sidebar-drawer"
      >
        <SideBar />
      </Drawer>
    </>
  );
};

export default ChatHeader;
