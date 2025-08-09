"use client";
import React from "react";
import { Drawer } from "antd";
import { IMAGES } from "@/components/ui/Image/ImageData";
import { DASHBOARD_NAVBAR_MENU, NAVBAR_MENU } from "@/constants/data/NavbarData";
import { MobileMenuSection } from "./MobileMenuSection";

const MobileMenu = ({ closeDrawer, drawerOpen }) => {
  return (
    <>
      <Drawer
        title={
          <a>
            <img src={IMAGES?.logo} alt="logo" style={{ width: 150 }} />
          </a>
        }
        placement="left"
        closable={true}
        onClose={closeDrawer}
        open={drawerOpen}
      >
        <ul className="gap-6 overflow-y-auto text-lg sm:text-xl">
          {DASHBOARD_NAVBAR_MENU?.map((section, index) => (
            <MobileMenuSection key={index} section={section} />
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default MobileMenu;
