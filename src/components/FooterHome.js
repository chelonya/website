import { useMemo } from "react";
import styles from "./FooterHome.module.css";

const FooterHome = ({
  footerHomeWidth,
  footerHomeRight,
  footerHomeBottom,
  footerHomeLeft,
  footerHomeDisplay,
  footerHomeFlexDirection,
  footerHomeAlignItems,
  footerHomeJustifyContent,
  footerHomeGap,
  footerHomeTop,
  footerHomeHeight,
  colorFooterHome,
  colorFooterHomePosition,
  colorFooterHomeWidth,
  colorFooterHomeZIndex,
  colorFooterHomeTop,
  colorFooterHomeLeft,
  frameDivMargin,
  frameDivLeft,
  frameDivWidth,
  frameDivZIndex,
}) => {
  const footerProjectsStyle = useMemo(() => {
    return {
      width: footerHomeWidth,
      right: footerHomeRight,
      bottom: footerHomeBottom,
      left: footerHomeLeft,
      display: footerHomeDisplay,
      flexDirection: footerHomeFlexDirection,
      alignItems: footerHomeAlignItems,
      justifyContent: footerHomeJustifyContent,
      gap: footerHomeGap,
      top: footerHomeTop,
      height: footerHomeHeight,
    };
  }, [
    footerHomeWidth,
    footerHomeRight,
    footerHomeBottom,
    footerHomeLeft,
    footerHomeDisplay,
    footerHomeFlexDirection,
    footerHomeAlignItems,
    footerHomeJustifyContent,
    footerHomeGap,
    footerHomeTop,
    footerHomeHeight,
  ]);

  const rectangleIconStyle = useMemo(() => {
    return {
      position: colorFooterHomePosition,
      width: colorFooterHomeWidth,
      zIndex: colorFooterHomeZIndex,
      top: colorFooterHomeTop,
      left: colorFooterHomeLeft,
    };
  }, [
    colorFooterHomePosition,
    colorFooterHomeWidth,
    colorFooterHomeZIndex,
    colorFooterHomeTop,
    colorFooterHomeLeft,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      margin: frameDivMargin,
      left: frameDivLeft,
      width: frameDivWidth,
      zIndex: frameDivZIndex,
    };
  }, [frameDivMargin, frameDivLeft, frameDivWidth, frameDivZIndex]);

  return (
    <div className={styles.footerprojects} style={footerProjectsStyle}>
      <img
        className={styles.footerprojectsChild}
        alt=""
        src={colorFooterHome}
        style={rectangleIconStyle}
      />
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.frameGroup}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <b className={styles.b}>+506 86161973</b>
        </div>
        <div className={styles.termsConditionsParent}>
          <b className={styles.b}>{`Terms & Conditions `}</b>
          <b className={styles.b}>{`Privacy Policy `}</b>
        </div>
        <div className={styles.layer1Parent}>
          <img className={styles.layer1Icon} alt="" src="/layer-11.svg" />
          <b className={styles.b}>volunteercoordination@asvpa.org</b>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
