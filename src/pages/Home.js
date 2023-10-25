import FooterHome from "../components/FooterHome";
import BtnsCardsHome from "../components/BtnsCardsHome";
import CardsProjectHome from "../components/CardsProjectHome";
import LogoHome from "../components/LogoHome";
import NavHome from "../components/NavHome";

const Desktop2 = () => {
  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[2782px] overflow-hidden text-justify text-29xl text-darkslategray font-lato">
      <FooterHome colorFooterHome="/rectangle-131.svg" />
      <BtnsCardsHome />
      <CardsProjectHome />
      <div className="absolute top-[1787px] left-[calc(50%_-_227px)] text-[130px] flex items-center w-[589px]">
        Projects
      </div>
      <div className="absolute top-[1157px] left-[280px] leading-[113.5%] whitespace-pre-wrap inline-block w-[878px]">
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
      <b className="absolute top-[1130px] left-[279px] leading-[113.5%]">
        Volunteer driven ecological conservation.
      </b>
      <div className="absolute top-[931px] left-[279px] text-left inline-block w-[906px]">
        <p className="m-0">
          <b>WELCOME TO ASVPA</b>
        </p>
        <p className="m-0 text-21xl text-black">
          {" "}
          Volunteer Association for Enviromental Protection
        </p>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[1438px] h-[755px] object-cover"
        alt=""
        src="/rectangle-12@2x.png"
      />
      <b className="absolute top-[229px] left-[159px] text-21xl inline-block text-white text-left w-[490px] h-[149px]">
        VOLUNTEERING A WORK OF HEART
      </b>
      <LogoHome />
      <NavHome />
    </div>
  );
};

export default Desktop2;
