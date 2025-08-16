export const ROUTES = {
  home: "/",
  settings: "/settings",

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


  portfolios:'/portfolios',
  viewPortfolio:'/portfolios/view/',

  Dashboard: "/dashboard/",
  DashboardOffers: "/dashboard/offers",
  DashboardListings: "/dashboard/listings",
  DashboardServices: "/dashboard/services",
  DashboardNotifications: "/dashboard/notifications",
  DashboardProfile: "/dashboard/profile",

  DashboardListings: "/dashboard/listings/",
  DashboardServices: "/dashboard/services/",
  DashboardOffers: "/dashboard/offers/",
  createOffer: "/offers/create",
  viewOffer: "/offers/view/",
  admin: "/admin/",

  Chat:"/chat/"
};

export const BACKEND_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_DOMAIN;
export const WEBSOCKET_DOMAIN = process.env.NEXT_PUBLIC_WEBSOCKET_DOMAIN_NAME;
