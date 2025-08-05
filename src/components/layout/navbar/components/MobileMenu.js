import { useRouter } from "next/navigation";
import React, { useState } from "react";

const mobileMenuData = [
  //   {
  //     title: 'Home Pages',
  //     links: [
  //       { label: 'Home One', route: '#' },
  //       { label: 'Home Two', route: './index2.html' },
  //       { label: 'Home Three', route: './index3.html' },
  //       { label: 'Home Four', route: './index4.html' },
  //     ],
  //   },
  {
    title: "Services",
    links: [
      { label: "All Services", route: "/services.html" },
      { label: "Service Details", route: "/service-details.html" },
      { label: "Browse Tasks", route: "/browse-tasks.html" },
    ],
  },
  {
    title: "Worker",
    links: [
      { label: "Find Workers", route: "/find-workers.html" },
      { label: "Worker Profile", route: "/worker-profile.html" },
      { label: "Worker Portfolio", route: "/worker-portfolio.html" },
      { label: "Portfolio Details", route: "/worker-portfolio-details.html" },
      { label: "Hire Worker", route: "/hire-me.html" },
      { label: "Worker Dashboard", route: "/dashboard/index.html" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "About Us", route: "/about-us.html" },
      { label: "Blog", route: "/blog.html" },
      { label: "Blog Details", route: "/blog-details.html" },
      { label: "Chat", route: "/chat.html" },
      { label: "FAQ", route: "/faq.html" },
      { label: "Contact", route: "/contact.html" },
      { label: "Privacy Policy", route: "/privacy-policy.html" },
      { label: "Terms & Conditions", route: "/terms-conditions.html" },
      { label: "Not Found", route: "/not-found.html" },
      { label: "Sign Up", route: "/sign-up-step-1.html" },
      { label: "Sign In", route: "/sign-in.html" },
    ],
  },
];

const MobileMenuSection = ({ section }) => {
  const router = useRouter();

  return (
    <li>
      <div className="subMenuToggle group flex flex-col items-start justify-start">
        <div className="flex cursor-pointer items-center justify-start">
          <span className="mobileSubMenuTitle">{section.title}</span>
          <i className="pl-1 pt-1 !text-xl duration-500">
            <i className="ph ph-caret-right"></i>
          </i>
        </div>
        <ul className="subMenuClose subMenu flex flex-col items-start justify-start gap-2 overflow-hidden pl-4 duration-700">
          {section?.links?.map((link, idx) => (
            <li key={idx}>
              <a
                onClick={()=>router.push(link?.route)}
                className="mobileSubMenuItem text-base"
              >
                <span>-</span> {link?.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const MobileMenu = () => {
  return (
    <nav>
      <div className="mobileMenuBg mobileMenuBgClose fixed left-0 top-0 z-[998] h-full w-full bg-r50 duration-700 lg:hidden"></div>

      <div className="mobileMenu mobileMenuClose fixed left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-r300 text-white/80 duration-700 min-[500px]:w-1/2 lg:hidden lg:gap-20">
        <div className="fixed top-0 flex w-full items-center justify-between bg-r300 p-4 sm:p-8">
          <a>
            <img
              src="/assets/images/logo_white.png"
              alt="logo"
              className="w-[150px]"
            />
          </a>
          <i className="ri-close-line mobileMenuCloseButton cursor-pointer !text-3xl">
            <i className="ph ph-x"></i>
          </i>
        </div>

        <ul className="flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 pl-8 pt-24 text-lg sm:text-xl lg:gap-10">
          {mobileMenuData.map((section, index) => (
            <MobileMenuSection key={index} section={section} />
          ))}
        </ul>

        <a
        
          href="./become-tasker.html"
          className="ml-4 rounded-full bg-y300 px-4 py-2 text-base font-medium text-n900"
        >
          Become A Tasker
        </a>
      </div>
    </nav>
  );
};

export default MobileMenu;
