import styles from "./Services.module.css";
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

      <Banner bannerImg="bannerServices.jpg" bannerText="SERVICES" />

      <div className={styles.sectionOneWrapper}>
        <b className={styles.mainTitle}>VOLUNTEERS MAIN DUTIES</b>

        <div className={styles.dutiesWrapper}>
          <div className={styles.dutiesGroupWrapper}>
            <div className={styles.eachIconWrapper}>
              <b>
                <p>Night Patrols</p>
              </b>
              <img
                className={styles.iconImgPatrols}
                alt=""
                src="/flashlight-icon.png"
              />
            </div>

            <div className={styles.eachIconWrapperEye}>
              <b>
                <p>Hatchery Watch</p>
              </b>
              <img
                className={styles.iconImgHatchery}
                alt=""
                src="/eye-icon.png"
              />
            </div>

            <div className={styles.eachIconWrapper}>
              <b>
                <p>Local Reforestation</p>
              </b>
              <img
                className={styles.iconImgReforestation}
                alt=""
                src="/tree-icon.png"
              />
            </div>
          </div>
          <div className={styles.dutiesGroupWrapper}>
            <div className={styles.eachIconWrapper}>
              <b>
                <p>Camp Cleaning</p>
              </b>
              <img
                className={styles.iconImgPatrols}
                alt=""
                src="/botter-icon.png"
              />
            </div>
            <div className={styles.eachIconWrapper}>
              <b>
                <p>Sloth Monitor</p>
              </b>
              <img
                className={styles.iconImgPatrols}
                alt=""
                src="/person-icon.png"
              />
            </div>
            <div className={styles.eachIconWrapper}>
              <b>
                <p>Kitchen Help</p>
              </b>
              <img
                className={styles.iconImgPatrols}
                alt=""
                src="/fork-icon.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionTwoWrapper}>
        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>Night Patrols</div>
          <div className={styles.paragraphStyle}>
            <p>
              You will be asigned minimum 3 night patrols each week. This shift
              is around 3 hours depends on how many turtles are found.
            </p>
            <p>
              Consist in walks through the beach at night so we see the turtles
              while they are putting the eggs, then we take some information
              from the turtle and take the eggs so we can relocate them at the
              hatchery. The walks are from 1 km to 5 km, so be physically and
              mentally prepared.
            </p>
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>Hatchery Watch</div>
          <div className={styles.paragraphStyle}>
            You will be assigned minimum 2 hatchery watchs per week. The shift
            is a total of 6 hours, you are expected to check the nest to see if
            baby turtles were born, also be aware that the nests are not attack
            by any animal that may enter the hatchery such as raccons.
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>Local Reforestation</div>
          <div className={styles.paragraphStyle}>
            You will have a local reforestation shift per week and also one
            local beach cleaning per week. Each shift is around an hour and a
            half long.
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>Camp Cleaning</div>
          <div className={styles.paragraphStyle}>
            You will be assigned 2 house cleaning per week. One individual that
            include showers and bathrooms and the other one is in groups and is
            a general cleaning for comun areas such as kitchen and dining room.
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>Sloth Monitor</div>
          <div className={styles.paragraphStyle}>
            You will be assinged one sloth monitor per week. The shift is around
            1 hour and 30 minutes. You will have to make walks near the camp to
            check the local sloth and make sure they are okay as sometimes they
            can get injur.
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>Kitchen Help</div>
          <div className={styles.paragraphStyle}>
            You will be assigned one kitchen shift per week. Usually you will be
            asked to help with some simple kitchen tasks for meal prepare.
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>Boulding Hatcheries</div>
          <div className={styles.paragraphStyle}>
            We work on hatchery building when we are not on spawning turtle
            seasson (from June to May).
          </div>
        </div>
      </div>
      <div className={styles.sectionThreeWrapper}>
        <b className={styles.secondTitle}>
          This is how a camp work schedule may look
        </b>

        <img className={styles.imgSchedule} alt="" src="/image-1@2x.png" />
      </div>
      <Footer />
      <FooterMobile/>

      <LogoNav />
      <Nav />
    </div>
  );
};

export default WhatToExpect;
