import React, { useState, useEffect } from "react";
import styles from "../styles/layout.module.css";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar";
import { MainContent } from "./main-content";
import AdminUsersPage from "../../users/AdminUsersPage";
import AdminCompanyPage from "../../companies/AdminCompanyPage";
import AdminListingPage from "../../listings/AdminListingPage";
import { useSearchParams, useRouter } from "next/navigation";
import AdminUpdateContentPage from "../../content-update/AdminUpdateContentPage";

export function Layout() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState("users");
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Map keys to components
  const componentsMap = {
    users: <AdminUsersPage />,
    companies: <AdminCompanyPage />,
    listings: <AdminListingPage />,
    content: <AdminUpdateContentPage menuKey={selectedMenu} />,
  };

  // Read params on load/change
  useEffect(() => {
    const pageParam = searchParams?.get("page");
    const menuParam = searchParams?.get("menu");

    if (pageParam && componentsMap[pageParam]) {
      setSelectedKey(pageParam);
    }
    if (menuParam) {
      setSelectedMenu(menuParam);
    }
  }, [searchParams]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Handle selection change + update URL
  const handleSelect = (key, menu = null) => {
    setSelectedKey(key);
    setSelectedMenu(menu);
    closeSidebar();

    const query = menu ? `?page=${key}&menu=${menu}` : `?page=${key}`;
    router.push(query);
  };

  const SelectedComponent = componentsMap[selectedKey];

  return (
    <div className={styles.layout}>
      <Header onToggleSidebar={toggleSidebar} />
      <div className={styles.container}>
        <Sidebar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          selectedKey={selectedKey}
          selectedMenu={selectedMenu} // ✅ Added this
          onSelect={handleSelect}
        />

        <MainContent isOpen={sidebarOpen}>{SelectedComponent}</MainContent>
      </div>
      {sidebarOpen && <div className={styles.overlay} onClick={closeSidebar} />}
    </div>
  );
}
