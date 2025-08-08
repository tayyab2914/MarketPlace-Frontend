import { ROUTES } from "./Constants";

export const BREADCRUMBS = {
  contactUs: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.contactPage, name: "Contact Us" },
  ],

  aboutUs: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.aboutUsPage, name: "About Us" },
  ],
  faq: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.faqPage, name: "FAQ" },
  ],
  termsAndConditions: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.termsAndConditionsPage, name: "Terms & Conditions" },
  ],
  privacyPolicy: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.privacyPolicyPage, name: "Privacy Policy" },
  ],
  servicesList: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.listServices, name: "Services" },
  ],
  servicesCreate: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.listServices, name: "Services" },
    { url: ROUTES.servicesCreate, name: "Create Service" },
  ],
  listingsList: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.listListings, name: "Listings" },
  ],
  listingsCreate: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.listListings, name: "Listings" },
    { url: ROUTES.listingsCreate, name: "Create Listing" },
  ],
};
