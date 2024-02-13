import { useMemo } from "react";
import styles from "./LogoNav.module.css";

const LogoNav = () => {

  return (
    <div className={styles.logoNavComponent}>
      <img className={styles.imgLogoNav} alt="" src="/logoAsvpa.svg" />
      <b className={styles.textLogoNav}>ASVPA</b>
    </div>
  );
};

export default LogoNav;
