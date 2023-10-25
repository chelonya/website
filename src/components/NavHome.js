import { useMemo } from "react";

const NavHome = ({
  navHomeTop,
  hOMEFontWeight,
  aBOUTUSFontWeight,
  sERVICESFontWeight,
  pROJECTSFontWeight,
  rEGISTERFontWeight,
}) => {
  const navHomeStyle = useMemo(() => {
    return {
      top: navHomeTop,
    };
  }, [navHomeTop]);

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
    <div
      className="absolute top-[18px] right-[160px] flex flex-row items-center justify-start gap-[39px] text-left text-xl text-white font-lato"
      style={navHomeStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[32px]">
        <b className="relative" style={hOMEStyle}>
          HOME
        </b>
        <b className="relative" style={aBOUTUSStyle}>
          ABOUT US
        </b>
        <b className="relative" style={sERVICESStyle}>
          SERVICES
        </b>
        <b className="relative" style={pROJECTSStyle}>
          PROJECTS
        </b>
      </div>
      <div className="bg-silver flex flex-row items-center justify-center p-2.5">
        <b className="relative" style={rEGISTERStyle}>
          REGISTER
        </b>
      </div>
    </div>
  );
};

export default NavHome;
