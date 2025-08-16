"use client";

import {
  Users,
  Building2,
  BookCheck,
  Edit2,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import styles from "../styles/sidebar.module.css";

const navigationItems = [
  { icon: Users, label: "Users", key: "users" },
  { icon: Building2, label: "Companies", key: "companies" },
  { icon: BookCheck, label: "Listings", key: "listings" },
];

const contentSubItems = [
  { label: "About Us", key: "about" },
  { label: "Contact", key: "contact" },
  { label: "FAQ", key: "faq" },
  { label: "Footer", key: "footer" },
  { label: "Home", key: "home" },
  { label: "Terms & Conditions", key: "terms" },
  { label: "Privacy Policy", key: "privacy" },
  { label: "Testimonials", key: "testimonials" },
  { label: "Top Experts", key: "top_experts" },
];

export function Sidebar({ isOpen, selectedKey,selectedMenu, onSelect }) {
  const [contentOpen, setContentOpen] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.logo}>MyApp</h2>
      </div>

      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {navigationItems.map((item) => (
            <li
              key={item.key}
              className={`${styles.navItem} ${
                selectedKey === item.key ? styles.active : ""
              }`}
            >
              <button
                className={styles.navLink}
                onClick={() => onSelect(item.key)}
              >
                <item.icon className={styles.navIcon} />
                <span className={styles.navLabel}>{item.label}</span>
              </button>
            </li>
          ))}

          <li className={styles.navItem}>
            <button
              className={styles.navLink}
              onClick={() => setContentOpen(!contentOpen)}
            >
              <Edit2 className={styles.navIcon} />
              <span className={styles.navLabel}>Content</span>
              {contentOpen ? (
                <ChevronDown style={{ marginLeft: "auto" }} size={16} />
              ) : (
                <ChevronRight style={{ marginLeft: "auto" }} size={16} />
              )}
            </button>

            {contentOpen && (
              <ul className={styles.subMenu}>
                {contentSubItems.map((sub) => (
                  <li
                    key={sub.key}
                    className={`${styles.navItem} ${
                      selectedKey === "content" && selectedMenu === sub.key
                        ? styles.active
                        : ""
                    }`}
                  >
                    <button
                      className={`${styles.navLink} ${styles.subNavLink}`}
                      onClick={() => onSelect("content", sub.key)}
                    >
                      <span className={styles.navLabel}>{sub.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
