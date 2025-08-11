"use client";

import {
  Users,
  Settings,
  FileText,
  Mail,
  Building2,
} from "lucide-react";
import styles from "../styles/sidebar.module.css";

const navigationItems = [
  { icon: Users, label: "Users", key: "users" },
  { icon: Building2, label: "Companies", key: "companies" },
  { icon: FileText, label: "Documents", key: "documents" },
  { icon: Mail, label: "Messages", key: "messages" },
  { icon: Settings, label: "Settings", key: "settings" },
];

export function Sidebar({ isOpen, onClose, selectedKey, onSelect }) {
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
                onClick={() => {
                  onSelect(item.key);
                }}
              >
                <item.icon className={styles.navIcon} />
                <span className={styles.navLabel}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.sidebarFooter}>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>JD</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.userEmail}>john@example.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
