import { useMemo } from "react";
import styles from "./LogoHome.module.css";

const LogoHome = ({ logoHomeTop }) => {
  const logoHomeStyle = useMemo(() => {
    return {
      top: logoHomeTop,
    };
  }, [logoHomeTop]);

  return (
    <div className={styles.logohome} style={logoHomeStyle}>
      <img className={styles.drawLogoHome} alt="" src="/layer-1.svg" />
      <b className={styles.textLogo}>ASVPA</b>
    </div>
  );
};

export default LogoHome;
