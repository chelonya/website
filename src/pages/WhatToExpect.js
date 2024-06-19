import styles from "./WhatToExpect.module.css";
import Nav from "../components/Nav";
import LogoNav from "../components/LogoNav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HamMenu from "../components/HamMenu";
import FooterMobile from "../components/FooterMobile";

const WhatToExpect = () => {
  return (
    <div>
      <HamMenu></HamMenu>

      <Banner bannerImg="bannerWTE.webp" bannerText="WHAT TO EXPECT" />

      <div className={styles.sectionOneWrapper}>
        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>WHEATER:</div>
          <div className={styles.paragraphStyle}>
            <p>
              You can expect a very hot and humid climate throughout the year in
              Costa Rica. The seasons are divided into the wet season and the
              dry season (from mid-November to April). The dry season is the
              peak tourist season, as it coincides with winter in the countries
              of the northern hemisphere. However, the rainy season is still a
              beautiful time to visit Costa Rica, as it usually only rains for a
              few hours each afternoon with plenty of sunshine.
            </p>
            <p>
              To combat this, bring loose clothing, wear a hat, and remember to
              stay hydrated.
            </p>
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>CURRENCY:</div>
          <div className={styles.paragraphStyle}>
            The currency used in Costa Rica is the Costa Rican colon. The
            exchange rate fluctuates, but $ 1.00 USD is generally about 610
            colones. Many restaurants and businesses in tourist areas accept US
            dollars.
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>FOOD:</div>
          <div className={styles.paragraphStyle}>
            In our organization, we care about animals and the environment in
            general, but it is also our duty to support the local economy of the
            places where we work that is why we buy fruits, vegetables, eggs,
            milk, and cheese that are produced in the area and the diet of our
            turtle camps is 100% vegetarian because we faithfully believe that
            every action is important to build a better planet.
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>LANGUAGE:</div>
          <div className={styles.paragraphStyle}>
            The official language of Costa Rica is Spanish. Although most young
            people speak some English, many places near our sites do not. Some
            staff members at ealatoch site speak English, so it is not necessary
            to speak Spanish to volunteer for ASVPA. We do, however, encourage
            you to learn some basic Spanish before you arrive.
          </div>
        </div>
      </div>

      <div className={styles.sectionTwoWrapper}>
        
        <b className={styles.titleList}>What To Bring</b>

        <div className={styles.listAndImg}>
          <div className={styles.list}>
            <p>•Sunscreen and sunglasses</p>
            <p>•Insect repellent (with DEET)</p>
            <p>•Mosquito net (there are some on site)</p>
            <p>•Open and closed-toed shoes</p>
            <p>•Rain clothes</p>
            <p>•Swimsuit</p>
            <p>•Red light (you cannot use white light around the turtles)</p>
            <p>•Towel (microfibre & beach towel)</p>
            <p>•Working clothes</p>
            <p>•Dark clothes for patrols</p>
            <p>
              {" "}
              •Activities for your free time (i.e. music, board games, cards,
              books)
            </p>
          </div>

          <img
            className={styles.imgList}
            alt=""
            src="/whatsapp-image-20230921-at-1022-1@2x.png"
          />
        </div>
      </div>

      <Footer />
      <FooterMobile/>

      <LogoNav />
      <Nav />
    </div>
  );
};

export default WhatToExpect;
