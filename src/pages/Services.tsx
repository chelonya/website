import { FunctionComponent } from "react";
import styles from "./Services.module.css";

const Services: FunctionComponent = () => {
  return (
    <div className={styles.services}>
      <div className={styles.footerservices}>
        <img
          className={styles.footerservicesChild}
          alt=""
          src="/rectangle-13.svg"
        />
        <div className={styles.frameParent}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <b className={styles.b}>+506 86161973</b>
        </div>
        <div className={styles.termsConditionsParent}>
          <b className={styles.b}>{`Terms & Conditions `}</b>
          <b className={styles.b}>{`Privacy Policy `}</b>
        </div>
        <div className={styles.layer1Parent}>
          <img className={styles.layer1Icon} alt="" src="/layer-11.svg" />
          <b className={styles.b}>volunteercoordination@asvpa.org</b>
        </div>
      </div>
      <div className={styles.sectionthreetext}>
        <div className={styles.thisIsHow}>
          This is how a camp work schedule may look
        </div>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </div>
      <div className={styles.sectiontwotext}>
        <div className={styles.sectiontwotextInner}>
          <div className={styles.hatcheryWatchWrapper}>
            <b className={styles.hatcheryWatch}>
              <p className={styles.hatchery}>{`Hatchery `}</p>
              <p className={styles.hatchery}>Watch</p>
            </b>
          </div>
        </div>
        <div className={styles.sectiontwotextChild}>
          <div className={styles.nightPatrolsWrapper}>
            <b className={styles.nightPatrols}>
              <p className={styles.hatchery}>Night</p>
              <p className={styles.hatchery}> Patrols</p>
            </b>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.localReforestationWrapper}>
            <b className={styles.localReforestation}>
              <p className={styles.hatchery}>Local</p>
              <p className={styles.hatchery}>Reforestation</p>
            </b>
          </div>
        </div>
        <div className={styles.sectiontwotextInner1}>
          <div className={styles.slothMonitorWrapper}>
            <b className={styles.slothMonitor}>
              <p className={styles.hatchery}>{`Sloth `}</p>
              <p className={styles.hatchery}>monitor</p>
            </b>
          </div>
        </div>
        <div className={styles.sectiontwotextInner2}>
          <div className={styles.kitchenHelpWrapper}>
            <b className={styles.slothMonitor}>
              <p className={styles.hatchery}>{`Kitchen `}</p>
              <p className={styles.hatchery}>Help</p>
            </b>
          </div>
        </div>
        <div className={styles.sectiontwotextInner3}>
          <div className={styles.buildingHatcheriesWrapper}>
            <b className={styles.buildingHatcheries}>Building hatcheries</b>
          </div>
        </div>
        <div className={styles.sectiontwotextInner4}>
          <div className={styles.houseCleaningWrapper}>
            <b className={styles.slothMonitor}>
              <p className={styles.hatchery}>House</p>
              <p className={styles.hatchery}> Cleaning</p>
            </b>
          </div>
        </div>
        <div className={styles.youWillBeContainer}>
          <p className={styles.hatchery}>
            You will be asigned minimum 3 night patrols each week. This shift is
            around 3 hours depends on how many turtles are found.
          </p>
          <p className={styles.hatchery}>
            consist in walks through the beach at night so we see the turtles
            while they are putting the eggs, then we take some information from
            the turtle and take the eggs so we can relocate them at the
            hatchery. The walks are from 1 km to 5 km, so be physiclly and
            mentally prepared.
          </p>
        </div>
        <div
          className={styles.youWillBe1}
        >{`You will be assigned minimum 2 hatchery watchs per week. The shift is a total of 6 hours, you are expected to check the nest to see if baby turtles were born, also be aware that the nests are not attack by any animal that may enter the hatchery such as raccons.       `}</div>
        <div className={styles.youWillHaveContainer}>
          <p className={styles.hatchery}>
            You will have a local reforestation shift per week and also once
            local beach cleaning per week. Each shift is around an hour long.
          </p>
          <p className={styles.hatchery}>{` `}</p>
        </div>
        <div className={styles.youWillBe2}>
          You will be assigned 2 house cleaning per week. One individual that
          include showers and bathrooms and the other one is in groups and is a
          general cleaning for comun areas such as kitchen and dining room.
        </div>
        <div className={styles.youWillBe3}>
          You will be assinged one sloth monitor per week. The shift is around 1
          hour and 30 minutes. You will have to make walks near the camp to
          check the local sloth and make sure they are okay as sometimes they
          can get injur.
        </div>
        <div className={styles.youWillBe4}>
          You will be assigned one kitchen shift per week. Usually you will be
          asked to help with some simple kitchen tasks for meal prepare.
        </div>
        <div
          className={styles.weWorkOn}
        >{`We work on hatchery building when we are not on spawning turtle seasson (from June to May). `}</div>
      </div>
      <b className={styles.volunteersMainDuties}>VOLUNTEERS MAIN DUTIES</b>
      <div className={styles.componentParent}>
        <div className={styles.nightPatrolsParent}>
          <b className={styles.nightPatrols1}>
            <p className={styles.hatchery}>Night</p>
            <p className={styles.hatchery}> Patrols</p>
          </b>
          <img
            className={styles.componentChild}
            alt=""
            src="/rectangle-9@2x.png"
          />
        </div>
        <div className={styles.hatcheryWatchParent}>
          <b className={styles.hatcheryWatch1}>
            <p className={styles.hatchery}>{`Hatchery `}</p>
            <p className={styles.hatchery}>Watch</p>
          </b>
          <img
            className={styles.componentItem}
            alt=""
            src="/rectangle-4@2x.png"
          />
        </div>
        <div className={styles.localReforestationParent}>
          <b className={styles.hatcheryWatch1}>
            <p className={styles.hatchery}>Local</p>
            <p className={styles.hatchery}>Reforestation</p>
          </b>
          <img
            className={styles.componentInner}
            alt=""
            src="/rectangle-5@2x.png"
          />
        </div>
      </div>
      <div className={styles.componentGroup}>
        <div className={styles.slothMonitorParent}>
          <b className={styles.hatcheryWatch1}>
            <p className={styles.hatchery}>{`Sloth `}</p>
            <p className={styles.hatchery}>monitor</p>
          </b>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-7@2x.png"
          />
        </div>
        <div className={styles.houseCleaningParent}>
          <b className={styles.hatcheryWatch1}>
            <p className={styles.hatchery}>House</p>
            <p className={styles.hatchery}> Cleaning</p>
          </b>
          <img
            className={styles.componentChild1}
            alt=""
            src="/rectangle-6@2x.png"
          />
        </div>
        <div className={styles.kitchenHelpParent}>
          <b className={styles.hatcheryWatch1}>
            <p className={styles.hatchery}>{`Kitchen `}</p>
            <p className={styles.hatchery}>Help</p>
          </b>
          <img
            className={styles.componentChild2}
            alt=""
            src="/rectangle-8@2x.png"
          />
        </div>
      </div>
      <div className={styles.banner}>
        <img
          className={styles.img20220604221056Copia1}
          alt=""
          src="/img-20220604-221056--copia-1@2x.png"
        />
      </div>
      <div className={styles.navservices}>
        <div className={styles.homeParent}>
          <b className={styles.b}>HOME</b>
          <b className={styles.b}>ABOUT US</b>
          <b className={styles.b}>SERVICES</b>
          <b className={styles.b}>PROJECTS</b>
        </div>
        <div className={styles.registerWrapper}>
          <b className={styles.b}>REGISTER</b>
        </div>
      </div>
      <div className={styles.logoservices}>
        <img className={styles.layer1Icon1} alt="" src="/layer-1.svg" />
        <b className={styles.asvpa}>ASVPA</b>
      </div>
    </div>
  );
};

export default Services;
