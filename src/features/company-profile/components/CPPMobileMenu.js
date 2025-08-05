import React from "react";

const CPPMobileMenu = () => {
  return (
    <nav>
      <div className="mobileMenuBg mobileMenuBgClose fixed left-0 top-0 z-[998] h-full w-full bg-r50 duration-700 lg:hidden"></div>

      <div className="mobileMenu mobileMenuClose fixed left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-r300 text-white/80 duration-700 min-[500px]:w-1/2 lg:hidden lg:gap-20">
        <div className="fixed top-0 flex w-full items-center justify-between bg-r300 p-4 sm:p-8">
          <a href="./worker-portfolio.html">
            <h3 className="heading-3">Albert Flores</h3>
          </a>
          <i className="ri-close-line mobileMenuCloseButton cursor-pointer !text-3xl">
            <i className="ph ph-x"></i>
          </i>
        </div>

        <ul className="flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 pl-8 pt-24 text-lg sm:text-xl lg:gap-10">
          <li><a href="#services" className="menu-hover hover:after:border-p1">Services</a></li>
          <li><a href="#about" className="menu-hover hover:after:border-p1">About</a></li>
          <li><a href="./faq.html" className="menu-hover hover:after:border-p1">FAQ</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default CPPMobileMenu;
