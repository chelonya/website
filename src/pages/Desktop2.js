const Desktop2 = () => {
  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[2782px] overflow-hidden text-left text-29xl text-white font-lato">
      <img
        className="absolute top-[0px] left-[0px] w-[1438px] h-[755px] object-cover"
        alt=""
        src="/rectangle-12@2x.png"
      />
      <div className="absolute top-[931px] left-[279px] inline-block w-[906px] text-darkslategray">
        <p className="m-0">
          <b>WELCOME TO ASVPA</b>
        </p>
        <p className="m-0 text-21xl text-black">
          {" "}
          Volunteer Association for Enviromental Protection
        </p>
      </div>
      <div className="absolute top-[1157px] left-[280px] leading-[113.5%] whitespace-pre-wrap text-justify inline-block w-[878px] text-darkslategray">
        <p className="m-0">
          <b>&nbsp;</b>
        </p>
        <p className="m-0 text-[36px] text-black">
          At ASVPA's project sites, volunteers from around the world come
          together to engage in ecological conservation alongside local
          biologists. We primarily deal with the protection of sea turtles but
          we also work to keep local beaches clean and provide aid for injured
          animals such as sloths.
        </p>
      </div>
      <div className="absolute top-[1787px] left-[calc(50%_-_227px)] text-[130px] text-darkslategray text-justify flex items-center w-[589px]">
        Projects
      </div>
      <div className="absolute w-[calc(100%_-_320px)] top-[2024px] right-[161px] left-[159px] flex flex-row items-start justify-start gap-[21px]">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[318px] object-cover"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[318px] object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[318px] object-cover"
          alt=""
          src="/rectangle-16@2x.png"
        />
      </div>
      <div className="absolute w-[14.31%] top-[2365px] right-[42.71%] left-[42.99%] bg-silver h-14 flex flex-row items-center justify-center py-4 px-8 box-border text-center text-11xl">
        <b className="relative flex items-center justify-center w-[136.07px] shrink-0">
          Pacuare
        </b>
      </div>
      <div className="absolute w-[14.31%] top-[2365px] right-[68.82%] left-[16.88%] bg-silver h-14 flex flex-row items-center justify-center py-4 px-8 box-border text-center text-11xl">
        <b className="relative flex items-center justify-center w-[136.07px] shrink-0">
          Matapalo
        </b>
      </div>
      <div className="absolute w-[14.58%] top-[2365px] right-[16.32%] left-[69.1%] bg-silver h-14 flex flex-row items-center justify-center py-4 px-8 box-border text-center text-11xl">
        <b className="relative flex items-center justify-center w-[122px] shrink-0">
          Esterillos
        </b>
      </div>
      <div className="absolute top-[12px] left-[160px] flex flex-row items-start justify-start gap-[9px] text-21xl">
        <img
          className="relative w-16 h-[50px] overflow-hidden shrink-0"
          alt=""
          src="/layer-1.svg"
        />
        <b className="relative inline-block w-[129px] h-[43px] shrink-0">
          ASVPA
        </b>
      </div>
      <div className="absolute top-[18px] right-[160px] flex flex-row items-center justify-start gap-[39px] text-xl">
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
      <b className="absolute top-[229px] left-[159px] text-21xl inline-block w-[406px] h-[149px]">
        INDULGE YOURSELF IN NATURE
      </b>
      <div className="absolute w-[calc(100%_+_39px)] right-[0px] bottom-[0px] left-[-39px] flex flex-col items-start justify-start gap-[10px] text-justify text-mini text-teal">
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
      <b className="absolute top-[1130px] left-[279px] leading-[113.5%] text-darkslategray text-justify">
        Volunteer driven ecological conservation.
      </b>
    </div>
  );
};

export default Desktop2;
