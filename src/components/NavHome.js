const NavHome = () => {
  return (
    <div className="absolute top-[18px] right-[160px] flex flex-row items-center justify-start gap-[39px] text-left text-xl text-white font-lato">
      <div className="flex flex-row items-start justify-start gap-[32px]">
        <b className="relative">HOME</b>
        <b className="relative">ABOUT US</b>
        <b className="relative">SERVICES</b>
        <b className="relative">PROJECTS</b>
      </div>
      <div className="bg-silver flex flex-row items-center justify-center p-2.5">
        <b className="relative">REGISTER</b>
      </div>
    </div>
  );
};

export default NavHome;
