import React, { useState } from "react";
import styles from "../styles/layout.module.css";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar";
import { MainContent } from "./main-content";
import AdminUsersPage from "../../users/AdminUsersPage";
import AdminCompanyPage from "../../companies/AdminCompanyPage";
import AdminListingPage from "../../listings/AdminListingPage";

export function Layout({}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState("users");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Map keys to components
  const componentsMap = {
    users: <AdminUsersPage />,
    companies: <AdminCompanyPage />,
    listings: <AdminListingPage />,
  };

  // Get the component for the selected sidebar option
  const SelectedComponent = componentsMap[selectedKey];

  return (
    <div className={styles.layout}>
      <Header onToggleSidebar={toggleSidebar} />
      <div className={styles.container}>
        <Sidebar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          selectedKey={selectedKey}
          onSelect={(key) => {
            setSelectedKey(key);
            closeSidebar();
          }}
        />
        <MainContent isOpen={sidebarOpen}>{SelectedComponent}</MainContent>
      </div>
      {sidebarOpen && <div className={styles.overlay} onClick={closeSidebar} />}
    </div>
  );
}
