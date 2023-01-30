import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt=""
            className={styles.logo_img}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
