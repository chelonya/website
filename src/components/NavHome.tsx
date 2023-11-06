import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./NavHome.module.css";

type NavHomeType = {
  /** Style props */
  navHomeTop?: CSSProperties["top"];
  hOMEFontWeight?: CSSProperties["fontWeight"];
  aBOUTUSFontWeight?: CSSProperties["fontWeight"];
  sERVICESFontWeight?: CSSProperties["fontWeight"];
  pROJECTSFontWeight?: CSSProperties["fontWeight"];
  rEGISTERFontWeight?: CSSProperties["fontWeight"];
  navHomeHeight?: CSSProperties["height"];
};

const NavHome: FunctionComponent<NavHomeType> = ({
  navHomeTop,
  hOMEFontWeight,
  aBOUTUSFontWeight,
  sERVICESFontWeight,
  pROJECTSFontWeight,
  rEGISTERFontWeight,
  navHomeHeight,
}) => {
  const navHomeStyle: CSSProperties = useMemo(() => {
    return {
      top: navHomeTop,
      height: navHomeHeight,
    };
  }, [navHomeTop, navHomeHeight]);

  const hOMEStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: hOMEFontWeight,
    };
  }, [hOMEFontWeight]);

  const aBOUTUSStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: aBOUTUSFontWeight,
    };
  }, [aBOUTUSFontWeight]);

  const sERVICESStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: sERVICESFontWeight,
    };
  }, [sERVICESFontWeight]);

  const pROJECTSStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: pROJECTSFontWeight,
    };
  }, [pROJECTSFontWeight]);

  const rEGISTERStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: rEGISTERFontWeight,
    };
  }, [rEGISTERFontWeight]);

  return (
    <div className={styles.navhome} style={navHomeStyle}>
      <div className={styles.textnavhome}>
        <b className={styles.home} style={hOMEStyle}>
          HOME
        </b>
        <b className={styles.home} style={aBOUTUSStyle}>
          ABOUT US
        </b>
        <b className={styles.home} style={sERVICESStyle}>
          SERVICES
        </b>
        <b className={styles.home} style={pROJECTSStyle}>
          PROJECTS
        </b>
      </div>
      <div className={styles.btnregisterhome}>
        <b className={styles.home} style={rEGISTERStyle}>
          REGISTER
        </b>
      </div>
    </div>
  );
};

export default NavHome;
