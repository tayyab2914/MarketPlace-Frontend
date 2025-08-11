"use client";

import { Menu } from "lucide-react";
import styles from "../styles/header.module.css";

export function Header({ onToggleSidebar }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button
          className={styles.menuButton}
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu />
        </button>
        <h1 className={styles.pageTitle}>Dashboard</h1>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.profileButton}>
          <div className={styles.profileAvatar}>JD</div>
        </div>
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
