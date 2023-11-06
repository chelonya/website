import { FunctionComponent } from "react";
import FooterHome from "../components/FooterHome";
import BtnsCardsHome from "../components/BtnsCardsHome";
import CardsProjectHome from "../components/CardsProjectHome";
import LogoHome from "../components/LogoHome";
import NavHome from "../components/NavHome";
import styles from "./Desktop2.module.css";

const Desktop2: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <FooterHome colorFooterHome="/rectangle-131.svg" />
      <BtnsCardsHome />
      <CardsProjectHome />
      <div className={styles.thirdtitlehome}>Projects</div>
      <div className={styles.texthome}>
        <p className={styles.blankLine}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.atAsvpasProject}>
          At ASVPA's project sites, volunteers from around the world come
          together to engage in ecological conservation alongside local
          biologists. We primarily deal with the protection of sea turtles but
          we also work to keep local beaches clean and provide aid for injured
          animals such as sloths.
        </p>
      </div>
      <b className={styles.secondtitlehome}>
        Volunteer driven ecological conservation.
      </b>
      <div className={styles.firsttitlehome}>
        <p className={styles.blankLine}>
          <b>WELCOME TO ASVPA</b>
        </p>
        <p className={styles.volunteerAssociationFor}>
          {" "}
          Volunteer Association for Enviromental Protection
        </p>
      </div>
      <img
        className={styles.bannerimghomeIcon}
        alt=""
        src="/rectangle-12@2x.png"
      />
      <b className={styles.bannertitlehome}>VOLUNTEERING A WORK OF HEART</b>
      <LogoHome />
      <NavHome />
    </div>
  );
};

export default Desktop2;
