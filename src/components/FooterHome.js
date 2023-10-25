const FooterHome = () => {
  return (
    <div className="absolute w-[calc(100%_+_39px)] right-[0px] bottom-[0px] left-[-39px] flex flex-col items-start justify-start gap-[10px] text-justify text-mini text-teal font-lato">
      <img
        className="relative w-[1633px] h-[142px] z-[0]"
        alt=""
        src="/rectangle-13.svg"
      />
      <div className="my-0 mx-[!important] absolute top-[36px] left-[199px] w-[1120px] flex flex-row flex-wrap items-start justify-start gap-[642px] z-[1]">
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
