import { FunctionComponent } from "react";
import FooterHome from "../components/FooterHome";
import NavHome from "../components/NavHome";
import LogoHome from "../components/LogoHome";
import styles from "./WhatToExpect.module.css";

const WhatToExpect: FunctionComponent = () => {
  return (
    <div className={styles.whatToExpect}>
      <FooterHome
        footerHomeWidth="100%"
        footerHomeRight="0rem"
        footerHomeBottom="0rem"
        footerHomeLeft="0rem"
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
        frameDivLeft="14.21rem"
        frameDivWidth="80rem"
        frameDivZIndex="1"
      />
      <div className={styles.sectiononetext}>
        <div className={styles.titleone}>
          <div className={styles.wheaterWrapper}>
            <div className={styles.wheater}>WHEATER</div>
          </div>
        </div>
        <div className={styles.titlethree}>
          <div className={styles.currencyWrapper}>
            <div className={styles.currency}>CURRENCY</div>
          </div>
        </div>
        <div className={styles.titlefour}>
          <div className={styles.foodWrapper}>
            <div className={styles.food}>FOOD</div>
          </div>
        </div>
        <div className={styles.titletwo}>
          <div className={styles.titletwoInner}>
            <div className={styles.titletwoInner}>
              <div className={styles.language}>LANGUAGE</div>
            </div>
          </div>
        </div>
        <div className={styles.textone}>
          <p className={styles.youCanExpect}>
            You can expect a very hot and humid climate throughout the year in
            Costa Rica. The seasons are divided into the wet season and the dry
            season (from mid-November to April). The dry season is the peak
            tourist season, as it coincides with winter in the countries of the
            northern hemisphere. However, the rainy season is still a beautiful
            time to visit Costa Rica, as it usually only rains for a few hours
            each afternoon with plenty of sunshine.
          </p>
          <p className={styles.youCanExpect}>
            To combat this, bring loose clothing, wear a hat, and remember to
            stay hydrated.
          </p>
        </div>
        <div className={styles.texttwo}>
          The official language of Costa Rica is Spanish. Although most young
          people speak some English, many places near our sites do not. Some
          staff members at ealatoch site speak English, so it is not necessary
          to speak Spanish to volunteer for ASVPA. We do, however, encourage you
          to learn some basic Spanish before you arrive.
        </div>
        <div className={styles.textthree}>
          The currency used in Costa Rica is the Costa Rican colon. The exchange
          rate fluctuates, but $ 1.00 USD is generally about 610 colones. Many
          restaurants and businesses in tourist areas accept US dollars.
        </div>
        <div className={styles.textfour}>
          In our organization, we care about animals and the environment in
          general, but it is also our duty to support the local economy of the
          places where we work that is why we buy fruits, vegetables, eggs,
          milk, and cheese that are produced in the area and the diet of our
          turtle camps is 100% vegetarian because we faithfully believe that
          every action is important to build a better planet.
        </div>
      </div>
      <div className={styles.sectiontwotext}>
        <b className={styles.titlesection2}>What To Bring</b>
        <p className={styles.descritionsectiontwo}>
          <ul className={styles.sunscreenAndSunglassesInsec}>
            <li className={styles.sunscreenAndSunglasses}>
              Sunscreen and sunglasses
            </li>
            <li className={styles.sunscreenAndSunglasses}>
              Insect repellent (with DEET)
            </li>
            <li className={styles.sunscreenAndSunglasses}>
              Mosquito net (there are some on site)
            </li>
            <li className={styles.sunscreenAndSunglasses}>
              Open and closed-toed shoes
            </li>
            <li className={styles.sunscreenAndSunglasses}>Rain clothes</li>
            <li className={styles.sunscreenAndSunglasses}>Swimsuit</li>
            <li className={styles.sunscreenAndSunglasses}>
              Red light (you cannot use white light around the turtles)
            </li>
            <li
              className={styles.sunscreenAndSunglasses}
            >{`Towel (microfibre & beach towel)`}</li>
            <li className={styles.sunscreenAndSunglasses}>Working clothes</li>
            <li className={styles.sunscreenAndSunglasses}>
              Dark clothes for patrols
            </li>
            <li>
              Activities for your free time (i.e. music, board games, cards,
              books)
            </li>
          </ul>
        </p>
        <img
          className={styles.whatsappImage20230921At1}
          alt=""
          src="/whatsapp-image-20230921-at-1022-1@2x.png"
        />
      </div>
      <div className={styles.banner}>
        <img
          className={styles.img202301111653161Icon}
          alt=""
          src="/img-20230111-165316-1@2x.png"
        />
      </div>
      <NavHome
        navHomeTop="1.43rem"
        hOMEFontWeight="unset"
        aBOUTUSFontWeight="unset"
        sERVICESFontWeight="unset"
        pROJECTSFontWeight="unset"
        rEGISTERFontWeight="unset"
        navHomeHeight="2.92rem"
      />
      <div className={styles.titlebanner}>WHAT TO EXPECT WHILE STAYING</div>
      <LogoHome logoHomeTop="1.43rem" />
    </div>
  );
};

export default WhatToExpect;
