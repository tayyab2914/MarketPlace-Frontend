import React from "react";
import MenuItemWithSubmenu from "./MenuItemWithSubmenu";
import { ROUTES } from "@/utils/Constants";

const DesktopMenu = () => {
  const menuData = [
    // {
    //   title: 'Home',
    //   links: [
    //     { label: 'Home One', route: '#' },
    //     { label: 'Home Two', route: './index2.html' },
    //     { label: 'Home Three', route: './index3.html' },
    //     { label: 'Home Four', route: './index4.html' },
    //   ],
    // },
    {
      title: "Services",
      links: [
        { label: "All Services", route: ROUTES.listServices },
        { label: "Add Service", route: ROUTES.createService },
      ],
    },
    {
      title: "Listings",
      links: [
        { label: "All Listings", route: ROUTES.listListings },
        { label: "Add Listing", route: ROUTES.createListing },
      ],
    },
    {
      title: "Pages",
      links: [
        { label: "About Us", route: ROUTES.aboutUsPage },
        { label: "FAQ", route: ROUTES.faqPage },
        { label: "Contact", route: ROUTES.contactPage },
        { label: "Terms and Conditions", route: ROUTES.termsAndConditionsPage },
        { label: "Privacy Policy", route: ROUTES.privacyPolicyPage },
      ],
    },
  ];

  return (
    <ul className="flex items-center gap-2 font-medium xxl:gap-6">
      {menuData.map((item) => (
        <MenuItemWithSubmenu
          key={item.title}
          title={item.title}
          links={item.links}
        />
      ))}
    </ul>
  );
};

export default DesktopMenu;
