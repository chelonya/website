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
  const navPrajectsStyle = useMemo(() => {
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
    <div className={styles.navprajects} style={navPrajectsStyle}>
      <div className={styles.homeParent}>
        <div className={styles.home} style={hOMEStyle}>
          HOME
        </div>
        <div className={styles.home} style={aBOUTUSStyle}>
          ABOUT US
        </div>
        <div className={styles.home} style={sERVICESStyle}>
          SERVICES
        </div>
        <div className={styles.home} style={pROJECTSStyle}>
          PROJECTS
        </div>
      </div>
      <div className={styles.registerWrapper}>
        <div className={styles.home} style={rEGISTERStyle}>
          REGISTER
        </div>
      </div>
    </div>
  );
};

export default NavHome;
