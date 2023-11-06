import { useMemo } from "react";
import styles from "./NavHome.module.css";

const NavHome = ({
  navHomeTop,
  hOMEFontWeight,
  aBOUTUSFontWeight,
  sERVICESFontWeight,
  pROJECTSFontWeight,
  rEGISTERFontWeight,
  navHomeHeight,
}) => {
  const navHomeStyle = useMemo(() => {
    return {
      top: navHomeTop,
      height: navHomeHeight,
    };
  }, [navHomeTop, navHomeHeight]);

  const hOMEStyle = useMemo(() => {
    return {
      fontWeight: hOMEFontWeight,
    };
  }, [hOMEFontWeight]);

  const aBOUTUSStyle = useMemo(() => {
    return {
      fontWeight: aBOUTUSFontWeight,
    };
  }, [aBOUTUSFontWeight]);

  const sERVICESStyle = useMemo(() => {
    return {
      fontWeight: sERVICESFontWeight,
    };
  }, [sERVICESFontWeight]);

  const pROJECTSStyle = useMemo(() => {
    return {
      fontWeight: pROJECTSFontWeight,
    };
  }, [pROJECTSFontWeight]);

  const rEGISTERStyle = useMemo(() => {
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
