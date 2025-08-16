"use client";
import styles from "../../styles/header.module.css";
import React from "react";
import { Dropdown } from "antd";
import { Menu as MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLogoutUser } from "@/hooks/useLogoutUser";
import { getHeaderMenuItems } from "./components/HeaderMenu";
import { useSelector } from "react-redux";
import { IMAGES } from "@/components/ui/Image/ImageData";
import { BACKEND_DOMAIN } from "@/utils/Constants";

export function Header({ onToggleSidebar }) {
  const router = useRouter();
  const { logoutUser } = useLogoutUser();
  const { company_info } = useSelector((state) => state.company);

  const menuItems = getHeaderMenuItems(router, logoutUser, () => {
    logoutUser();
  });
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button
          className={styles.menuButton}
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <MenuIcon />
        </button>
        <h1 className={styles.pageTitle}>Admin Panel</h1>
      </div>

      <div className={styles.headerRight}>
        <Dropdown
          menu={{ items: menuItems }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <div className={styles.profileButton} style={{ cursor: "pointer" }}>
            <img
              className={styles.profileAvatar}
              src={
                company_info?.profile_image
                  ? `${BACKEND_DOMAIN}${company_info?.profile_image}`
                  : IMAGES?.user
              }
            />
          </div>
        </Dropdown>
      </div>
    </header>
  );
}

// "use client";

// import { Menu, Bell, Search } from "lucide-react";
// import styles from "../styles/header.module.css";

// export function Header({ onToggleSidebar }) {
//   return (
//     <header className={styles.header}>
//       <div className={styles.headerLeft}>
//         <button
//           className={styles.menuButton}
//           onClick={onToggleSidebar}
//           aria-label="Toggle sidebar"
//         >
//           <Menu />
//         </button>
//         <h1 className={styles.pageTitle}>Dashboard</h1>
//       </div>

//       <div className={styles.headerCenter}>
//         <div className={styles.searchContainer}>
//           <Search className={styles.searchIcon} />
//           <input
//             type="text"
//             placeholder="Search..."
//             className={styles.searchInput}
//           />
//         </div>
//       </div>

//       <div className={styles.headerRight}>
//         <button
//           className={styles.notificationButton}
//           aria-label="Notifications"
//         >
//           <Bell />
//           <span className={styles.notificationBadge}>3</span>
//         </button>
//         <div className={styles.profileButton}>
//           <div className={styles.profileAvatar}>JD</div>
//         </div>
//       </div>
//     </header>
//   );
// }
