import React from "react";
import "./styles/footer.css";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/ui/Image/ImageData";
import * as LucideIcons from "lucide-react";

import { useSelector } from "react-redux";

const leftLinks = [
  { route: ROUTES.home, label: "Home" },
  { route: ROUTES.aboutUsPage, label: "About Us" },
  { route: ROUTES.faqPage, label: "FAQ" },
];

const rightLinks = [
  { route: ROUTES.listListings, label: "Find Work" },
  { route: ROUTES.privacyPolicyPage, label: "Privacy Policy" },
  { route: ROUTES.contactPage, label: "Contact Us" },
];

const Footer = () => {
  const router = useRouter();
  const { pages_content } = useSelector((state) => state.pages);
  const { footer = {} } = pages_content || {};
  const {
    leftCounter = {},
    rightCounter = {},
    copyrightText = "",
    icons = [],
  } = footer || {};
  return (
    <footer className="ftr-footer">
      <div className="ftr-container">
        <div className="ftr-top-row">
          <ul className="ftr-nav-list">
            {leftLinks.map(({ route, label }, index) => (
              <li key={index}>
                <a className="ftr-link" onClick={() => router.push(route)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="./index.html" className="ftr-logo-link">
            <img src={IMAGES.logoWhite} alt="Logo" className="ftr-logo" />
          </a>

          <ul className="ftr-nav-list">
            {rightLinks.map(({ route, label }, index) => (
              <li key={index}>
                <a className="ftr-link" onClick={() => router.push(route)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ftr-middle-row">
        <div className="ftr-stats-item">
          <p className="ftr-odometer">
            <span className="odometer" data-odometer-final={leftCounter?.count}>
              {leftCounter?.count}+
            </span>
          </p>
          <p className="ftr-stat-text">{leftCounter?.text}</p>
        </div>
        <div className="ftr-stats-item ftr-stats-item-bordered">
          <p className="ftr-odometer">
            <span className="odometer" data-odometer-final={rightCounter?.count}>
              {rightCounter?.count}+
            </span>
          </p>
          <p className="ftr-stat-text">{rightCounter?.text}</p>
        </div>
        <div className="ftr-newsletter">
          <p className="ftr-newsletter-label">Subscribe to our newsletter</p>
          <div className="ftr-newsletter-input-group">
            <input
              type="text"
              className="ftr-newsletter-input"
              placeholder="Enter Email"
            />
            <button className="ftr-newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="ftr-bottom-row">
        <div className="ftr-social-icons">
          {icons?.map(({  label, href }, idx) => {
            const IconComponent = LucideIcons[label]; // dynamic lookup
            if (!IconComponent) return null; // fallback if icon name is wrong
            return (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
