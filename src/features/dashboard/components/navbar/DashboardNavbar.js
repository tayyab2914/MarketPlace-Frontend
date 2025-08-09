"use client";
import React, { useState } from "react";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import NavActions from "./components/NavActions";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/Constants";
import { IMAGES } from "@/components/ui/Image/ImageData";
import { Menu } from "lucide-react";
import './styles/navbar.css'

export const DashboardNavbar = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <header className="dsh-nav-header dsh-nav-header-absolute">
      <div className="dsh-nav-container">
        <div className="dsh-nav-inner">
          <div className="dsh-nav-logo-section">
            <Menu onClick={showDrawer} strokeWidth={2} size={28} className="dsh-nav-m-menu-icon" />
            <a onClick={() => router.push(ROUTES.home)}>
              <img src={IMAGES.logo} className="dsh-nav-logo" />
            </a>
          </div>

          <nav className="dsh-nav-d-menu">
            <DesktopMenu />
          </nav>

          <NavActions />
        </div>
      </div>

      <MobileMenu showDrawer={showDrawer} closeDrawer={closeDrawer} drawerOpen={drawerOpen}/>
    </header>
  );
};

export default DashboardNavbar;
