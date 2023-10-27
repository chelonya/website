import FooterHome from "../components/FooterHome";
import LogoHome from "../components/LogoHome";
import NavHome from "../components/NavHome";

const AboutUs = () => {
  return (
    <div className="relative bg-white w-full h-[3125px] overflow-hidden text-left text-13xl text-black font-lato">
      <FooterHome
        footerHomeWidth="100%"
        footerHomeRight="-2px"
        footerHomeBottom="0px"
        footerHomeLeft="2px"
        footerHomeDisplay="flex"
        footerHomeFlexDirection="column"
        footerHomeAlignItems="flex-start"
        footerHomeJustifyContent="flex-start"
        footerHomeGap="10px"
        footerHomeTop="unset"
        footerHomeHeight="unset"
        colorFooterHome="/rectangle-13.svg"
        colorFooterHomePosition="relative"
        colorFooterHomeWidth="1440px"
        colorFooterHomeZIndex="0"
        colorFooterHomeTop="unset"
        colorFooterHomeLeft="unset"
        frameDivMargin="0 !important"
        frameDivLeft="160px"
        frameDivWidth="1120px"
        frameDivZIndex="1"
      />
      <div className="absolute top-[2179px] left-[160px] w-[1120px] h-[633px]">
        <b className="absolute top-[0px] left-[0px] text-21xl inline-block text-esmeralda w-[665px] [-webkit-text-stroke:1px_#3b7a7d]">
          OUR NATURE NEEDS VOLUNTEERS
        </b>
        <b className="absolute top-[66px] left-[0px] inline-block w-[265px]">
          <p className="m-0">But what is being</p>
          <p className="m-0"> a volunteer?</p>
        </b>
        <div className="absolute top-[177px] left-[0px] text-justify inline-block w-[1120px]">
          <p className="m-0">
            Voluntary refers to the subject who decides to provide a service or
            perform a job of his own free will, without being obliged to do so
            for legal, contractual, or economic reasons. In other words, a
            volunteer is a person who has the will to invest time and money to
            help a cause.
          </p>
          <p className="m-0">Therefore.</p>
          <p className="m-0">
            A volunteer does not go to a conservation project to complain. On
            the contrary, the volunteer is the person who looks for options and
            solutions in the face of adversity.
          </p>
          <p className="m-0">
            A volunteer does not go to a conservation project in search of
            comforts and luxuries. These things are found in his house, in his
            country. The volunteer rather seeks adventure, a simple and happy
            life.
          </p>
          <p className="m-0">
            <span>{`A volunteer does `}</span>
            <b className="font-lato">not criticize</b>
            <span className="font-lato">{` the project but rather `}</span>
            <b className="font-lato">supports it to improve</b>
            <span className="font-lato">.</span>
          </p>
        </div>
      </div>
      <div className="absolute top-[1617px] left-[255px] w-[932px] h-[357px] text-center text-11xl">
        <b className="absolute top-[41px] left-[0px] inline-block text-justify w-[360px] h-[206px] text-13xl">
          <p className="m-0">Some Cool Facts</p>
          <p className="m-0 text-21xl">{`These number were made with your support `}</p>
        </b>
        <div className="absolute top-[0px] left-[382px] w-[202px] h-[289px] text-left text-45xl">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightblue w-[170px] h-[158px]" />
          <b className="absolute top-[32px] left-[31px] inline-block w-[171px] h-[99px]">{`93%  `}</b>
          <div className="absolute top-[181px] left-[0px] text-11xl text-center inline-block w-[171px]">
            <p className="m-0">{`Baby turtles `}</p>
            <p className="m-0">made it to the sea</p>
          </div>
        </div>
        <div className="absolute top-[0px] left-[572px] w-[170px] h-[357px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightblue w-[170px] h-[158px]" />
          <div className="absolute top-[181px] left-[0px] inline-block w-[170px] h-44">
            <p className="m-0">{`Turtles were `}</p>
            <p className="m-0">seen on the beach</p>
          </div>
          <b className="absolute top-[32px] left-[32px] text-45xl inline-block text-left w-[138px] h-[86px]">
            310
          </b>
        </div>
        <div className="absolute top-[0px] left-[762px] w-[170px] h-[289px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightblue w-[170px] h-[158px]" />
          <div className="absolute top-[181px] left-[0px] inline-block w-[170px]">
            <p className="m-0">Nests were</p>
            <p className="m-0">{` found and protected `}</p>
          </div>
          <b className="absolute top-[27px] left-[30px] text-45xl text-left">
            242
          </b>
        </div>
      </div>
      <div className="absolute top-[908px] left-[169px] w-[1112px] h-[487px] text-justify">
        <div className="absolute top-[0px] left-[380px] inline-block w-[732px]">
          ASVPA strives to aid in species and environmental conservation,
          engaging in research and education in Costa Rica, while working to
          preserve natural resources.
        </div>
        <div className="absolute top-[213px] left-[380px] inline-block w-[730px] h-[274px]">
          With the help of volunteers and community engagement, we can continue
          to protect the vulnerable sea turtle populations and other species
          living in the area. We have a competitive educational model of
          conservation, pursuing research and development projects with
          proactive, prospective, flexible and innovative character.
        </div>
        <div className="absolute top-[45px] left-[0px] text-21xl font-extrabold text-esmeralda text-left">
          OUR MISSION
        </div>
        <div className="absolute top-[296px] left-[0px] text-21xl font-extrabold text-esmeralda text-left">
          OUR VISION
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[755px] object-cover"
        alt=""
        src="/imgbannerabouus@2x.png"
      />
      <div className="absolute top-[581px] left-[1079px] text-21xl font-extrabold text-white">
        ABOUT US
      </div>
      <LogoHome logoHomeTop="20px" />
      <NavHome
        navHomeTop="20px"
        hOMEFontWeight="unset"
        aBOUTUSFontWeight="unset"
        sERVICESFontWeight="unset"
        pROJECTSFontWeight="unset"
        rEGISTERFontWeight="unset"
        navHomeHeight="40.9px"
      />
    </div>
  );
};

export default AboutUs;
