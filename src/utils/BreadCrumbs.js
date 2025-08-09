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
  portfolio: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.portfolios, name: "Portfolios" },
  ],
  serviceView: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.listServices, name: "Services" },
    { url: ROUTES.servicesCreate, name: "View Service" },
  ],
  settings: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.settings, name: "Settings" },
  ],
  offerPage: [
    { url: ROUTES.home, name: "Home" },
    { url: ROUTES.listListings, name: "Listings" },
    { url: ROUTES.createOffer, name: "Send Offer" },
  ],
  dashboardListing: [
    { url: ROUTES.Dashboard, name: "Dashboard" },
    { url: ROUTES.DashboardListings, name: "Listings" },
  ],
};
