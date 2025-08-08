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
};
