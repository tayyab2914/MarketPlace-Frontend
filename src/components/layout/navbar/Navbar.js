import React from "react";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import NavActions from "./components/NavActions";

const Navbar = () => {
  return (
    <header className="header headerAbsolute left-0 right-0 top-0 z-50">
      <div className="max-xxl:container xxl:px-25">
        <div className="text-s1 flex items-center justify-between py-6">
          <div className="flex items-center gap-3 pb-1">
            <button className="mobileMenuOpenButton text-4xl !leading-none lg:hidden">
              <i className="ph-bold ph-list pt-2 text-b500"></i>
            </button>
            <a href="#">
              <img
                src="/assets/images/logo.png"
                alt="Servibe logo"
                className="max-w-[170px] max-sm:max-w-[150px]"
              />
            </a>
          </div>

          <nav className="max-lg:hidden">
            <DesktopMenu />
          </nav>

          <NavActions />
        </div>
      </div>

      <MobileMenu />
    </header>
  );
};

export default Navbar;
