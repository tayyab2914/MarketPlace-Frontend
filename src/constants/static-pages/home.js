const HERO_CONTENT = {
  subtitle: "Your Solution Hub",
  title: (
    <>
      Find the Right <br />
      <span className="text-y300">Talent</span> for Any Task
    </>
  ),
  description:
    "Access assistance from a vast network of reliable local experts, spanning home repairs to beauty services.",
  searchButtonText: "Search",
};
const HOW_IT_WORKS_CONTENT = {
  heading: (
    <>
      How It <span className="text-b300 underline">Works</span>
    </>
  ),
  subheading: "What steps do I need to take to join?",
  steps: [
    {
      id: "step1",
      iconClass: "ph ph-sort-descending",
      title: "Step_01",
      contentTitle: "Tasker Evaluation",
      contentDescription:
        "Select a Tasker based on affordability, expertise, and customer feedback, ensuring you find the perfect fit for your needs.",
      imageSrc: "./assets/images/step_one_illus.png",
      ctaLink: "./sign-up-step-1.html",
      ctaText: "Sign up now",
    },
    {
      id: "step2",
      iconClass: "ph ph-calendar-plus",
      title: "Step_02",
      contentTitle: "Book Now",
      contentDescription:
        "Secure your spot at the event of your choice by booking your tickets now through our convenient online booking platform.",
      imageSrc: "./assets/images/step_two_illus.png",
      ctaLink: "./sign-up-step-1.html",
      ctaText: "Sign up now",
    },
    {
      id: "step3",
      iconClass: "ph ph-book-open-text",
      title: "Step_03",
      contentTitle: "ChatTip Hub",
      contentDescription:
        "Your Ultimate Destination for Chat-based Tips, Advice, and Insights on a Variety of Topics and Interests.",
      imageSrc: "./assets/images/step_three_illus.png",
      ctaLink: "./sign-up-step-1.html",
      ctaText: "Sign up now",
    },
  ],
};
const BOOKING_CONTENT = {
  titleSmall: "Fixed Price Service",
  features: [
    { iconClass: "ph ph-currency-circle-dollar", text: "See your price." },
    { iconClass: "ph ph-calendar-check", text: "Book a time." },
    { iconClass: "ph ph-credit-card", text: "Pay online." },
  ],
  heading: "Looking to book a fixed price service?",
  description:
    "Interested in scheduling a service at a set rate? Browse our selection of fixed-price offerings and book with confidence today",
  subDescription: "Plumbing, Handyman, House Cleaning, and more...",
  cta: {
    href: "./contact.html",
    text: "Contact Now",
  },
  imageSrc: "./assets/images/home_one_contact_img.png",
};

export const FIND_WORK_AND_HIRING_CONTENT = {
    leftBgClass: "bg-g300",
    rightBgClass: "bg-r300",
    profiles: [
      {
        badgeText: "PRO",
        reviewImage: "/assets/images/review_img.png",
        rating: "4.7",
        reviewCount: "81",
        hexagonImgClass: "expertImg5",
        verifyBadgeImg: "/assets/images/verify-badge2.png",
        heading: "I am an Expert",
        description: "I'm a Skilled Professional, Ready to Assist with Expertise and Dedication in Your Task.",
        detail1: "Full-Time",
        detail2: "10+ Years",
        ctaHref: "./find-workers.html",
        ctaText: "Explore Now",
      },
      {
        badgeText: "PRO",
        reviewImage: "/assets/images/review_img.png",
        rating: "4.7",
        reviewCount: "81",
        hexagonImgClass: "expertImg2",
        verifyBadgeImg: "/assets/images/verify-badge2.png",
        heading: "I am an Expert",
        description: "I'm a Skilled Professional, Ready to Assist with Expertise and Dedication in Your Task.",
        detail1: "Full-Time",
        detail2: "10+ Years",
        ctaHref: "./find-workers.html",
        ctaText: "Explore Now",
      },
    ],
  };
  export const FOOTER_CONTENT = {
    mainTitle: "Let’s work together",
    sections: [
      {
        title: "Looking to hire an Service?",
        ctaText: "LET'S TALK",
        ctaRoute: "/contact", // Use ROUTES.contactPage in your actual app
        buttonBgClass: "bg-y300",
        iconBgClass: "bg-y300",
        iconRightOffset: "148px",
      },
      {
        title: "Looking to hire an Service?",
        ctaText: "JOIN US",
        ctaRoute: "/list-services", // Use ROUTES.listServices in your actual app
        buttonBgClass: "bg-y300",
        iconBgClass: "bg-y300",
        iconRightOffset: "115px",
      },
    ],
    contactInfo: {
      address: "Valentin, Street Road 27, New York. USA - 752252",
      phone: "(629) 555-0129",
      email: "example@mail.com",
    },
    socialLinks: [
      { href: "javascript:void(0)", iconClass: "ph ph-facebook-logo" },
      { href: "javascript:void(0)", iconClass: "ph ph-twitch-logo" },
      { href: "javascript:void(0)", iconClass: "ph ph-instagram-logo" },
      { href: "javascript:void(0)", iconClass: "ph ph-linkedin-logo" },
    ],
    bigTitle: "Servibe",
    designedBy: {
      text: "Designed By",
      linkText: "Pixelaxis",
      linkHref: "",
    },
    copyrightText: "Copyright @ 2024 Servibe",
    bigArrowImage: "/assets/images/big_arrow.png",
  };
  
  
export const HOME_CONTENT = {
  hero: HERO_CONTENT,
  howItWorks: HOW_IT_WORKS_CONTENT,
  booking: BOOKING_CONTENT,
  findWork :FIND_WORK_AND_HIRING_CONTENT,
  footer:FOOTER_CONTENT
};
