import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LogoHome.module.css";

type LogoHomeType = {
  /** Style props */
  logoHomeTop?: CSSProperties["top"];
};

const LogoHome: FunctionComponent<LogoHomeType> = ({ logoHomeTop }) => {
  const logoHomeStyle: CSSProperties = useMemo(() => {
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
