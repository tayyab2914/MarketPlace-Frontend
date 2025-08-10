import React from "react";
import MenuItemWithSubmenu from "./MenuItemWithSubmenu";
import { useRouter } from "next/navigation";
import { DASHBOARD_NAVBAR_MENU, NAVBAR_MENU } from "@/constants/data/NavbarData";

const DesktopMenu = () => {
  const router = useRouter()

  return (
    <ul className="dsh-nav-d-menu-inner">
      {DASHBOARD_NAVBAR_MENU?.map((item) =>
        item?.type === "submenu" ? (
          <MenuItemWithSubmenu
            key={item?.title}
            title={item?.title}
            links={item?.links}
          />
        ) : (
          <li key={item?.title} className="cursor-pointer px-2 py-3 hover:text-b500">
            <a onClick={() => router.push(item?.route)}>{item?.title}</a>
          </li>
        )
      )}
    </ul>
  );
};

export default DesktopMenu;
