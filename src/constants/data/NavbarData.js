import { ROUTES } from "@/utils/Constants";

export const NAVBAR_MENU = [
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
export const DASHBOARD_NAVBAR_MENU = [
  {
    type: "single",
    title: "Home",
    route: ROUTES.home,
  },
  {
    type: "single",
    title: "Listing",
    route: ROUTES.DashboardListings,
  },
  {
    type: "single",
    title: "Services",
    route: ROUTES.DashboardServices,
  },
  {
    type: "offers",
    title: "Offers",
    route: ROUTES.DashboardOffers,
  },
];
