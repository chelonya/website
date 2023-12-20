import { useMemo } from "react";
import styles from "./LogoHome.module.css";

const LogoHome = ({ logoHomeTop }) => {
  const logoProjectsStyle = useMemo(() => {
    return {
      top: logoHomeTop,
    };
  }, [logoHomeTop]);

  return (
    <div className={styles.logoprojects} style={logoProjectsStyle}>
      <img className={styles.layer1Icon} alt="" src="/layer-12.svg" />
      <b className={styles.asvpa}>ASVPA</b>
    </div>
  );
};

export default LogoHome;
