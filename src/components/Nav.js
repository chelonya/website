import { useMemo } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navComponent}>
      <div className={styles.navContainer}>
        <div className={styles.navItem}>HOME</div>
        <div className={styles.navItem}>ABOUT US</div>
        <div className={styles.navItem}>SERVICES</div>
        <div className={styles.navItem}>PROJECTS</div>
        <div className={styles.navItemRegister}>REGISTER</div>
      </div>
    </div>
  );
};

export default Nav;
