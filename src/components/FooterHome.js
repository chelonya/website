import { useMemo } from "react";

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
  const footerHomeStyle = useMemo(() => {
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

  const colorFooterHomeStyle = useMemo(() => {
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
    <div
      className="absolute w-[calc(100%_+_39px)] right-[0px] bottom-[0px] left-[-39px] flex flex-col items-start justify-start gap-[10px] text-justify text-mini text-teal-200 font-lato"
      style={footerHomeStyle}
    >
      <img
        className="relative w-[1633px] h-[142px] z-[0]"
        alt=""
        src={colorFooterHome}
        style={colorFooterHomeStyle}
      />
      <div
        className="my-0 mx-[!important] absolute top-[36px] left-[199px] w-[1120px] flex flex-row flex-wrap items-start justify-start gap-[642px] z-[1]"
        style={frameDivStyle}
      >
        <div className="flex flex-row items-center justify-start gap-[8px] text-darkslategray">
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0"
            alt=""
            src="/frame.svg"
          />
          <b className="relative">+506 86161973</b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[105px]">
          <b className="relative">{`Terms & Conditions `}</b>
          <b className="relative">{`Privacy Policy `}</b>
        </div>
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <img
            className="relative w-[34px] h-[41px] overflow-hidden shrink-0"
            alt=""
            src="/layer-11.svg"
          />
          <b className="relative">volunteercoordination@asvpa.org</b>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
