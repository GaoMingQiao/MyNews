import React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

export default function Menu() {

  return (
    <div className={styles.header}>
      <span className={styles.logo}>MyNews</span>
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.homeLink}>
          <span className={styles.link}>Home</span>
        </Link>
        <Link href="/favorite" className={styles.favoriteLink}>
          <span className={styles.link}>Favorite</span>
        </Link>
      </div>
    </div>
  )
}
