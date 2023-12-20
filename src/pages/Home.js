import CardsProjectHome from "../components/CardsProjectHome";
import BtnsCardsHome from "../components/BtnsCardsHome";
import styles from "./Desktop2.module.css";

const Desktop2 = () => {
  return (
    <div className={styles.home}>
      <div className={styles.bannersection}>
        <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
        <nav className={styles.navservices}>
          <b className={styles.aboutUs}>HOME</b>
          <b className={styles.aboutUs}>ABOUT US</b>
          <b className={styles.aboutUs}>SERVICES</b>
          <b className={styles.aboutUs}>PROJECTS</b>
          <div className={styles.btnregister}>
            <b className={styles.register}>REGISTER</b>
          </div>
        </nav>
      </div>
      <div className={styles.descriptionsection}>
        <div className={styles.firsttitlehome}>
          <p className={styles.welcomeToAsvpa}>
            <b>WELCOME TO ASVPA</b>
          </p>
          <p className={styles.volunteerAssociationFor}>
            {" "}
            Volunteer Association for Enviromental Protection
          </p>
        </div>
        <b className={styles.secondtitlehome}>
          Volunteer driven ecological conservation.
        </b>
        <div className={styles.texthome}>
          <p className={styles.welcomeToAsvpa}>
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
      </div>
      <div className={styles.projectssection}>
        <div className={styles.thirdtitlehome}>Projects</div>
        <CardsProjectHome />
        <BtnsCardsHome />
      </div>
      <div className={styles.footerservices}>
        <img
          className={styles.footerwrapperIcon}
          alt=""
          src="/footerwrapper@2x.png"
        />
        <div className={styles.wasection}>
          <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
          <b className={styles.register}>+506 86161973</b>
        </div>
        <div className={styles.termsppsection}>
          <b className={styles.register}>{`Terms & Conditions `}</b>
          <b className={styles.register}>{`Privacy Policy `}</b>
        </div>
        <div className={styles.emailsection}>
          <img className={styles.layer1Icon} alt="" src="/layer-1@2x.png" />
          <b className={styles.register}>volunteercoordination@asvpa.org</b>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
