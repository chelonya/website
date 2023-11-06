import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FooterHome.module.css";

type FooterHomeType = {
  colorFooterHome?: string;

  /** Style props */
  footerHomeWidth?: CSSProperties["width"];
  footerHomeRight?: CSSProperties["right"];
  footerHomeBottom?: CSSProperties["bottom"];
  footerHomeLeft?: CSSProperties["left"];
  footerHomeDisplay?: CSSProperties["display"];
  footerHomeFlexDirection?: CSSProperties["flexDirection"];
  footerHomeAlignItems?: CSSProperties["alignItems"];
  footerHomeJustifyContent?: CSSProperties["justifyContent"];
  footerHomeGap?: CSSProperties["gap"];
  footerHomeTop?: CSSProperties["top"];
  footerHomeHeight?: CSSProperties["height"];
  colorFooterHomePosition?: CSSProperties["position"];
  colorFooterHomeWidth?: CSSProperties["width"];
  colorFooterHomeZIndex?: CSSProperties["zIndex"];
  colorFooterHomeTop?: CSSProperties["top"];
  colorFooterHomeLeft?: CSSProperties["left"];
  frameDivMargin?: CSSProperties["margin"];
  frameDivLeft?: CSSProperties["left"];
  frameDivWidth?: CSSProperties["width"];
  frameDivZIndex?: CSSProperties["zIndex"];
};

const FooterHome: FunctionComponent<FooterHomeType> = ({
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
  const footerHomeStyle: CSSProperties = useMemo(() => {
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

  const colorFooterHomeStyle: CSSProperties = useMemo(() => {
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

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      margin: frameDivMargin,
      left: frameDivLeft,
      width: frameDivWidth,
      zIndex: frameDivZIndex,
    };
  }, [frameDivMargin, frameDivLeft, frameDivWidth, frameDivZIndex]);

  return (
    <div className={styles.footerhome} style={footerHomeStyle}>
      <img
        className={styles.colorFooterHome}
        alt=""
        src={colorFooterHome}
        style={colorFooterHomeStyle}
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
