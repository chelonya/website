import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.footerservices}>
        <img
          className={styles.footerwrapperIcon}
          alt=""
          src="/rectangle-13.svg"
        />
        <div className={styles.wasection}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <b className={styles.b}>+506 86161973</b>
        </div>
        <div className={styles.termsppsection}>
          <b className={styles.b}>{`Terms & Conditions `}</b>
          <b className={styles.b}>{`Privacy Policy `}</b>
        </div>
        <div className={styles.emailsection}>
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
        <div className={styles.nightpatrolsdescription}>
          <div className={styles.nightpatrolsheader}>
            <b className={styles.nightPatrols}>
              <p className={styles.night}>Night</p>
              <p className={styles.night}> Patrols</p>
            </b>
          </div>
          <div className={styles.nightpatrolstext}>
            <p className={styles.night}>
              You will be asigned minimum 3 night patrols each week. This shift
              is around 3 hours depends on how many turtles are found.
            </p>
            <p className={styles.night}>
              Consist in walks through the beach at night so we see the turtles
              while they are putting the eggs, then we take some information
              from the turtle and take the eggs so we can relocate them at the
              hatchery. The walks are from 1 km to 5 km, so be physiclly and
              mentally prepared.
            </p>
          </div>
        </div>
        <div className={styles.nightpatrolsdescription}>
          <div className={styles.hatcherywatchheader}>
            <b className={styles.nightPatrols}>
              <p className={styles.night}>{`Hatchery `}</p>
              <p className={styles.night}>Watch</p>
            </b>
          </div>
          <div
            className={styles.youWillBe1}
          >{`You will be assigned minimum 2 hatchery watchs per week. The shift is a total of 6 hours, you are expected to check the nest to see if baby turtles were born, also be aware that the nests are not attack by any animal that may enter the hatchery such as raccons.       `}</div>
        </div>
        <div className={styles.nightpatrolsdescription}>
          <div className={styles.localreforestationheader}>
            <b className={styles.localReforestation}>
              <p className={styles.night}>Local</p>
              <p className={styles.night}>Reforestation</p>
            </b>
          </div>
          <div className={styles.youWillHaveContainer}>
            <p className={styles.night}>
              You will have a local reforestation shift per week and also once
              local beach cleaning per week. Each shift is around an hour long.
            </p>
            <p className={styles.night}>{` `}</p>
          </div>
        </div>
        <div className={styles.nightpatrolsdescription}>
          <div className={styles.housecleaningheader}>
            <b className={styles.houseCleaning}>
              <p className={styles.night}>House</p>
              <p className={styles.night}> Cleaning</p>
            </b>
          </div>
          <div className={styles.youWillBe2}>
            You will be assigned 2 house cleaning per week. One individual that
            include showers and bathrooms and the other one is in groups and is
            a general cleaning for comun areas such as kitchen and dining room.
          </div>
        </div>
        <div className={styles.nightpatrolsdescription}>
          <div className={styles.slothheader}>
            <b className={styles.nightPatrols}>
              <p className={styles.night}>{`Sloth `}</p>
              <p className={styles.night}>monitor</p>
            </b>
          </div>
          <div className={styles.youWillBe2}>
            You will be assinged one sloth monitor per week. The shift is around
            1 hour and 30 minutes. You will have to make walks near the camp to
            check the local sloth and make sure they are okay as sometimes they
            can get injur.
          </div>
        </div>
        <div className={styles.nightpatrolsdescription}>
          <div className={styles.kitchenhelpheader}>
            <b className={styles.nightPatrols}>
              <p className={styles.night}>{`Kitchen `}</p>
              <p className={styles.night}>Help</p>
            </b>
          </div>
          <div className={styles.youWillHaveContainer}>
            You will be assigned one kitchen shift per week. Usually you will be
            asked to help with some simple kitchen tasks for meal prepare.
          </div>
        </div>
        <div className={styles.buildinghatcheriesdescription}>
          <div className={styles.buildinghatcheriesheader}>
            <b className={styles.buildingHatcheries}>
              <p className={styles.night}>Building</p>
              <p className={styles.night}> hatcheries</p>
            </b>
          </div>
          <div
            className={styles.weWorkOn}
          >{`We work on hatchery building when we are not on spawning turtle seasson (from June to May). `}</div>
        </div>
      </div>
      <div className={styles.maindutiesbottomgroup}>
        <div className={styles.housecleaningwrapper}>
          <b className={styles.nightPatrols}>
            <p className={styles.night}>House</p>
            <p className={styles.night}> Cleaning</p>
          </b>
          <img
            className={styles.housecleaningwrapperChild}
            alt=""
            src="/rectangle-6@2x.png"
          />
        </div>
        <div className={styles.slothmonitorwrapper}>
          <b className={styles.nightPatrols}>
            <p className={styles.night}>{`Sloth `}</p>
            <p className={styles.night}>monitor</p>
          </b>
          <img
            className={styles.slothmonitorwrapperChild}
            alt=""
            src="/rectangle-7@2x.png"
          />
        </div>
        <div className={styles.kitchenhelpwrapper}>
          <b className={styles.nightPatrols}>
            <p className={styles.night}>{`Kitchen `}</p>
            <p className={styles.night}>Help</p>
          </b>
          <img
            className={styles.kitchenhelpwrapperChild}
            alt=""
            src="/rectangle-8@2x.png"
          />
        </div>
      </div>
      <div className={styles.maindutiestopgroup}>
        <div className={styles.nightpatrolswrapper}>
          <b className={styles.nightPatrols1}>
            <p className={styles.night}>Night</p>
            <p className={styles.night}> Patrols</p>
          </b>
          <img
            className={styles.nightpatrolswrapperChild}
            alt=""
            src="/rectangle-9@2x.png"
          />
        </div>
        <div className={styles.hatcherywatchwrapper}>
          <b className={styles.hatcheryWatch1}>
            <p className={styles.night}>{`Hatchery `}</p>
            <p className={styles.night}>Watch</p>
          </b>
          <img
            className={styles.hatcherywatchwrapperChild}
            alt=""
            src="/rectangle-4@2x.png"
          />
        </div>
        <div className={styles.localreforestationwrapper}>
          <b className={styles.nightPatrols}>
            <p className={styles.night}>Local</p>
            <p className={styles.night}>Reforestation</p>
          </b>
          <img
            className={styles.localreforestationwrapperChild}
            alt=""
            src="/rectangle-5@2x.png"
          />
        </div>
      </div>
      <b className={styles.volunteersMainDuties}>VOLUNTEERS MAIN DUTIES</b>
      <img
        className={styles.imgbannerIcon}
        alt=""
        src="/img-20220604-221056--copia-1@2x.png"
      />
      <div className={styles.navservices}>
        <b className={styles.b}>HOME</b>
        <b className={styles.b}>ABOUT US</b>
        <b className={styles.b}>SERVICES</b>
        <b className={styles.b}>PROJECTS</b>
        <div className={styles.btnregister}>
          <b className={styles.b}>REGISTER</b>
        </div>
      </div>
      <div className={styles.logoservices}>
        <img className={styles.imgturtleIcon} alt="" src="/imgturtle.svg" />
        <b className={styles.asvpa}>ASVPA</b>
      </div>
    </div>
  );
};

export default Services;
