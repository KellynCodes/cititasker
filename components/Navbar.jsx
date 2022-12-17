import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <div className={styles.logo}>
          <img src="logo.png" alt="" className={styles.logo_img} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
