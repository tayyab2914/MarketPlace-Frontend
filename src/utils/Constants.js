export const ROUTES = {
  home: "/",

  contactPage: "/contact-us",
  faqPage: "/faq",
  aboutUsPage: "/about-us",
  termsAndConditionsPage: "/terms-and-conditions",
  privacyPolicyPage: "/privacy-policy",

  signin: "/account/signin",
  signup: "/account/signup",
  forgotPassword: "/account/forgot-password",
  verifyEmail: "/account/verify-email",
  resetPassword: "/account/reset-password",

  listServices: "/services",
  createService: "/services/create",
  viewService: "/services/view/",

  listListings: "/listings",
  createListing: "/listings/create",
  viewListing: "/listings/view/",

  listOffers: "/offers",
  createOffer: "/offers/create",
  viewOffer: "/offers/view/",

  portfolios:'/portfolios',
  viewPortfolio:'/portfolios/view/'
};

export const BACKEND_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_DOMAIN;
