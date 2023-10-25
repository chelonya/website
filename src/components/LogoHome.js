const LogoHome = () => {
  return (
    <div className="absolute top-[12px] left-[160px] flex flex-row items-start justify-start gap-[9px] text-left text-21xl text-white font-lato">
      <img
        className="relative w-16 h-[50px] overflow-hidden shrink-0"
        alt=""
        src="/layer-1.svg"
      />
      <b className="relative inline-block w-[129px] h-[43px] shrink-0">ASVPA</b>
    </div>
  );
};

export default LogoHome;
