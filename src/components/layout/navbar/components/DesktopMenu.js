import React from "react";
import MenuItemWithSubmenu from "./MenuItemWithSubmenu";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/Constants";

const DesktopMenu = () => {
  const router = useRouter();

  const menuData = [
    {
      type: "submenu",
      title: "Services",
      links: [
        { label: "All Services", route: ROUTES.listServices },
        { label: "Add Service", route: ROUTES.createService },
      ],
    },
    {
      type: "submenu",
      title: "Listings",
      links: [
        { label: "All Listings", route: ROUTES.listListings },
        { label: "Add Listing", route: ROUTES.createListing },
      ],
    },
    {
      type: "submenu",
      title: "Pages",
      links: [
        { label: "About Us", route: ROUTES.aboutUsPage },
        { label: "FAQ", route: ROUTES.faqPage },
        { label: "Contact", route: ROUTES.contactPage },
        { label: "Terms and Conditions", route: ROUTES.termsAndConditionsPage },
        { label: "Privacy Policy", route: ROUTES.privacyPolicyPage },
      ],
    },
    {
      type: "single",
      title: "Portfolios",
      route: ROUTES.portfolios,
    },
  ];

  return (
    <ul className="flex items-center gap-2 font-medium xxl:gap-6">
      {menuData.map((item) =>
        item.type === "submenu" ? (
          <MenuItemWithSubmenu
            key={item.title}
            title={item.title}
            links={item.links}
          />
        ) : (
          <li key={item.title} className="cursor-pointer px-2 py-3 hover:text-b500">
            <a onClick={() => router.push(item.route)}>{item.title}</a>
          </li>
        )
      )}
    </ul>
  );
};

export default DesktopMenu;
