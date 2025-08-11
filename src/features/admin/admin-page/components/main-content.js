import React from "react";
import styles from '../styles/main-content.module.css'

export function MainContent({ children, isOpen }) {
  return (
    <main className={`${styles.mainContent} ${isOpen ? styles.shifted : ""}`}>
      <div className={styles.contentWrapper}>{children}</div>
    </main>
  );
}
