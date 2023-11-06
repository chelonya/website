import FooterHome from "../components/FooterHome";
import LogoHome from "../components/LogoHome";
import NavHome from "../components/NavHome";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <FooterHome
        footerHomeWidth="100%"
        footerHomeRight="-0.14rem"
        footerHomeBottom="0rem"
        footerHomeLeft="0.14rem"
        footerHomeDisplay="flex"
        footerHomeFlexDirection="column"
        footerHomeAlignItems="flex-start"
        footerHomeJustifyContent="flex-start"
        footerHomeGap="10px"
        footerHomeTop="unset"
        footerHomeHeight="unset"
        colorFooterHome="/rectangle-13.svg"
        colorFooterHomePosition="relative"
        colorFooterHomeWidth="102.86rem"
        colorFooterHomeZIndex="0"
        colorFooterHomeTop="unset"
        colorFooterHomeLeft="unset"
        frameDivMargin="0 !important"
        frameDivLeft="11.43rem"
        frameDivWidth="80rem"
        frameDivZIndex="1"
      />
      <div className={styles.sectionthree}>
        <b className={styles.titlesectionthree}>OUR NATURE NEEDS VOLUNTEERS</b>
        <b className={styles.subtitlesectionthree}>
          <p className={styles.butWhatIs}>But what is being</p>
          <p className={styles.butWhatIs}> a volunteer?</p>
        </b>
        <div className={styles.textsectionthree}>
          <p className={styles.butWhatIs}>
            Voluntary refers to the subject who decides to provide a service or
            perform a job of his own free will, without being obliged to do so
            for legal, contractual, or economic reasons. In other words, a
            volunteer is a person who has the will to invest time and money to
            help a cause.
          </p>
          <p className={styles.butWhatIs}>Therefore.</p>
          <p className={styles.butWhatIs}>
            A volunteer does not go to a conservation project to complain. On
            the contrary, the volunteer is the person who looks for options and
            solutions in the face of adversity.
          </p>
          <p className={styles.butWhatIs}>
            A volunteer does not go to a conservation project in search of
            comforts and luxuries. These things are found in his house, in his
            country. The volunteer rather seeks adventure, a simple and happy
            life.
          </p>
          <p className={styles.butWhatIs}>
            <span>{`A volunteer does `}</span>
            <b className={styles.notCriticize}>not criticize</b>
            <span
              className={styles.notCriticize}
            >{` the project but rather `}</span>
            <b className={styles.notCriticize}>supports it to improve</b>
            <span className={styles.notCriticize}>.</span>
          </p>
        </div>
      </div>
      <div className={styles.sectiontwo}>
        <b className={styles.textfacts}>
          <p className={styles.butWhatIs}>Some Cool Facts</p>
          <p
            className={styles.theseNumberWere}
          >{`These number were made with your support `}</p>
        </b>
        <div className={styles.factone}>
          <div className={styles.figureoneaboutus} />
          <b className={styles.dataone}>{`93%  `}</b>
          <div className={styles.textdataone}>
            <p className={styles.butWhatIs}>{`Baby turtles `}</p>
            <p className={styles.butWhatIs}>made it to the sea</p>
          </div>
        </div>
        <div className={styles.facttwo}>
          <div className={styles.figureoneaboutus} />
          <div className={styles.textdatatwo}>
            <p className={styles.butWhatIs}>{`Turtles were `}</p>
            <p className={styles.butWhatIs}>seen on the beach</p>
          </div>
          <b className={styles.datatwo}>310</b>
        </div>
        <div className={styles.factthree}>
          <div className={styles.figureoneaboutus} />
          <div className={styles.textdatathree}>
            <p className={styles.butWhatIs}>Nests were</p>
            <p className={styles.butWhatIs}>{` found and protected `}</p>
          </div>
          <b className={styles.datathree}>242</b>
        </div>
      </div>
      <div className={styles.sectionone}>
        <div className={styles.textmissionaboutus}>
          ASVPA strives to aid in species and environmental conservation,
          engaging in research and education in Costa Rica, while working to
          preserve natural resources.
        </div>
        <div className={styles.textvisionaboutus}>
          With the help of volunteers and community engagement, we can continue
          to protect the vulnerable sea turtle populations and other species
          living in the area. We have a competitive educational model of
          conservation, pursuing research and development projects with
          proactive, prospective, flexible and innovative character.
        </div>
        <div className={styles.titlemissionabouus}>OUR MISSION</div>
        <div className={styles.titlevisionaboutus}>OUR VISION</div>
      </div>
      <img
        className={styles.imgbannerabouusIcon}
        alt=""
        src="/imgbannerabouus@2x.png"
      />
      <div className={styles.bannertextabouus}>ABOUT US</div>
      <LogoHome logoHomeTop="1.43rem" />
      <NavHome
        navHomeTop="1.43rem"
        hOMEFontWeight="unset"
        aBOUTUSFontWeight="unset"
        sERVICESFontWeight="unset"
        pROJECTSFontWeight="unset"
        rEGISTERFontWeight="unset"
        navHomeHeight="2.92rem"
      />
    </div>
  );
};

export default AboutUs;
