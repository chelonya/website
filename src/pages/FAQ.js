import FooterHome from "../components/FooterHome";
import NavHome from "../components/NavHome";
import LogoHome from "../components/LogoHome";
import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.faq}>
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
      <div className={styles.sectiontwotext}>
        <div className={styles.iWillHaveAMoneyRefundIfWrapper}>
          <b className={styles.iWillHave}>
            I WILL HAVE A MONEY REFUND IF I LEAVE BEFORE FINISHING MY
            VOLUNTEERING?
          </b>
        </div>
        <div className={styles.eachVolunteerIsContainer}>
          <p className={styles.eachVolunteerIs}>
            Each volunteer is free to choose how long they will participate in
            volunteering, therefore the organization makes its budget according
            to the projection of confirmed volunteers. It is for this reason
            that there is no refund when it is the volunteer's decision to leave
            earlier.
          </p>
          <p className={styles.eachVolunteerIs}>
            The volunteer may withdraw from the volunteering agreement at any
            time prior to the start of the voluntary placement. In the event
            that the volunteer withdraws from the volunteering agreement or if
            the volunteer fails to start its volunteering assignment, the
            organization shall forfeit its claim to the participation fee.
          </p>
          <p className={styles.eachVolunteerIs}>&nbsp;</p>
          <p className={styles.eachVolunteerIs}>
            Lieu of the participation fee, the organization may, provided the
            volunteer has not withdrawn for reasons for which the organization
            is responsible, demand adequate financial compensation.
          </p>
          <p className={styles.eachVolunteerIs}>
            {" "}
            The amount of compensation shall be determined by the participation
            fees minus the expenses saved by the organization and any gains it
            may make by using the voluntary placement otherwise.
          </p>
        </div>
        <div className={styles.considerationOfThe}>
          Consideration of the commonly saved expenses and the commonly possible
          gains from use alternative of the voluntary placement, compensation is
          calculated as follows:
        </div>
        <img
          className={styles.sectiontwoingIcon}
          alt=""
          src="/sectiontwoing@2x.png"
        />
        <img className={styles.refundimgIcon} alt="" src="/refundimg@2x.png" />
      </div>
      <div className={styles.sectiononetext}>
        <div className={styles.doINeedToSpeakSpanishToParent}>
          <b className={styles.doINeed}>
            DO I NEED TO SPEAK SPANISH TO VOLUNTEER?
          </b>
          <div className={styles.weHaveStaff}>
            We have staff that speaks both English and Spanish but we recommend
            that you have a basic level of understanding of the language.
          </div>
        </div>
        <div className={styles.howOldDoIHaveToBeParent}>
          <b className={styles.howOldDo}>HOW OLD DO I HAVE TO BE?</b>
          <div className={styles.youMustBe}>
            You must be 18 years or older to volunteer with us. You must also be
            able to participate in some physical activity (ie. night patrols on
            the beach and biodiversity walks during the daytime).
          </div>
        </div>
        <div className={styles.howLongIsTheMinimummaximuParent}>
          <b className={styles.howLongIs}>
            HOW LONG IS THE MINIMUM/MAXIMUM STAY?
          </b>
          <div className={styles.duringPeakSeason}>
            During peak season (mid-June to August), the minimum stay is 2 weeks
            and the maximum stay is 6 weeks. Depending on availability, one-week
            stays may be approved.
          </div>
        </div>
        <div className={styles.whileVolunteersTypicallyAreParent}>
          <div className={styles.whileVolunteersTypically}>
            While volunteers typically are able to see turtles, we can not
            guarantee this as it depends on the nesting patterns of the animals.
            We must always remember that we work with wild animals, therefore
            being unpredictable is the general rule in them.
          </div>
          <b className={styles.amIGuaranteed}>
            AM I GUARANTEED TO SEE A TURTLE?
          </b>
        </div>
        <div className={styles.volunteersHelpWithConstructParent}>
          <div className={styles.volunteersHelpWith}>
            Volunteers help with construction and maintenance of the turtle
            hatchery, continuous monitoring of the turtle nests, night walks and
            data collection, transferring of nests to the hatchery, the release
            of the turtle hatchlings, sloth habitat monitoring, beach cleaning,
            and participation in any of our current projects. Volunteers are
            also expected to participate in general site maintenance and
            cleaning of the living quarters.
          </div>
          <b className={styles.whatKindOf}>
            WHAT KIND OF WORK WILL I BE DOING?
          </b>
        </div>
        <div className={styles.itIsNotMandatoryToHaveAnParent}>
          <div className={styles.itIsNot}>
            It is not mandatory to have any experience but volunteers must be in
            good physical condition, be happy living in basic accommodations,
            and have a passion for environmental conservation. It is an
            advantage to have previous knowledge or experience in biology, sea
            turtle conservation, and/or construction.
          </div>
          <b className={styles.doINeed1}>
            DO I NEED TO HAVE ANY PREVIOUS EXPERIENCE?
          </b>
        </div>
        <div className={styles.thereIsWifiAtTheSiteButParent}>
          <div className={styles.thereIsWifi}>
            There is wifi at the site, but the hours may be restricted depending
            on site conditions (streaming services like Netflix and Youtube are
            not permitted). Our main focus is to work with nature so volunteers
            are encouraged to spend their free time connecting with the
            environment around them.
          </div>
          <b className={styles.isThereWifi}>IS THERE WIFI?</b>
        </div>
      </div>
      <div className={styles.banner}>
        <img
          className={styles.img2022111210161711}
          alt=""
          src="/img-20221112-101617-1-1@2x.png"
        />
        <div className={styles.frequentlyAskedQuestions}>
          FREQUENTLY ASKED QUESTIONS
        </div>
      </div>
      <NavHome
        navHomeTop="2.14rem"
        hOMEFontWeight="unset"
        aBOUTUSFontWeight="unset"
        sERVICESFontWeight="unset"
        pROJECTSFontWeight="unset"
        rEGISTERFontWeight="unset"
        navHomeHeight="2.92rem"
      />
      <LogoHome logoHomeTop="1.79rem" />
    </div>
  );
};

export default FAQ;
