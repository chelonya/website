import Nav from "../components/Nav";
import LogoNav from "../components/LogoNav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import styles from "./FAQ.module.css";
import HamMenu from "../components/HamMenu";
import FooterMobile from "../components/FooterMobile";

const WhatToExpect = () => {
  return (
    <div>
      <HamMenu></HamMenu>

      <Banner
        bannerImg="bannerFaq.webp"
        bannerText="FREQUENTLY ASKED QUESTIONS"
      />

      <div className={styles.sectionOneWrapper}>
        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>
            1.DO I NEED TO SPEAK SPANISH TO VOLUNTEER?
          </div>
          <div className={styles.paragraphStyle}>
            <p>
              We have staff that speaks both English and Spanish but we
              recommend that you have a basic level of understanding of the
              language.
            </p>
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>2.HOW OLD DO I HAVE TO BE?</div>
          <div className={styles.paragraphStyle}>
            You must be 18 years or older to volunteer with us. You must also be
            able to participate in some physical activity (ie. night patrols on
            the beach and biodiversity walks during the daytime).
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>
            3.HOW LONG IS THE MINIMUM/MAXIMUM STAY?
          </div>
          <div className={styles.paragraphStyle}>
            During peak season (mid-June to August), the minimum stay is 2 weeks
            and the maximum stay is 6 weeks. Depending on availability, one-week
            stays may be approved.
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>
            {" "}
            4.AM I GUARANTEED TO SEE A TURTLE?
          </div>
          <div className={styles.paragraphStyle}>
            While volunteers typically are able to see turtles, we can not
            guarantee this as it depends on the nesting patterns of the animals.
            We must always remember that we work with wild animals, therefore
            being unpredictable is the general rule in them.
          </div>
        </div>
        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>
            {" "}
            5.WHAT KIND OF WORK WILL I BE DOING?
          </div>
          <div className={styles.paragraphStyle}>
            Volunteers help with construction and maintenance of the turtle
            hatchery, continuous monitoring of the turtle nests, night walks and
            data collection, transferring of nests to the hatchery, the release
            of the turtle hatchlings, sloth habitat monitoring, beach cleaning,
            and participation in any of our current projects. Volunteers are
            also expected to participate in general site maintenance and
            cleaning of the living quarters.
          </div>
        </div>

        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>
            6.DO I NEED TO HAVE ANY PREVIOUS EXPERIENCE?
          </div>
          <div className={styles.paragraphStyle}>
            It is not mandatory to have any experience but volunteers must be in
            good physical condition, be happy living in basic accommodations,
            and have a passion for environmental conservation. It is an
            advantage to have previous knowledge or experience in biology, sea
            turtle conservation, and/or construction.
          </div>
        </div>
        <div className={styles.eachSegmentWrapper}>
          <div className={styles.titleStyle}>7.IS THERE WIFI?</div>
          <div className={styles.paragraphStyle}>
            There is wifi at the site, but the hours may be restricted depending
            on site conditions (streaming services like Netflix and Youtube are
            not permitted). Our main focus is to work with nature so volunteers
            are encouraged to spend their free time connecting with the
            environment around them.
          </div>
        </div>
      </div>

      <div className={styles.sectionTwoWrapper}>
        <div className={styles.paragraphRefundWrapper}>
          <div className={styles.titleSectionTwo}>
            8.WILL I HAVE A MONEY REFUND IF I LEAVE BEFORE FINISHING MY
            VOLUNTEERING?
          </div>
          <p className={styles.paragraphRefundInf}>
            Each volunteer is free to choose how long they will participate in
            volunteering, therefore the organization makes its budget according
            to the projection of confirmed volunteers. It is for this reason
            that there is no refund when it is the volunteer's decision to leave
            earlier.
          </p>
          <p className={styles.paragraphRefundInf}>
            The volunteer may withdraw from the volunteering agreement at any
            time prior to the start of the voluntary placement. In the event
            that the volunteer withdraws from the volunteering agreement or if
            the volunteer fails to start its volunteering assignment, the
            organization shall forfeit its claim to the participation fee.
          </p>
          <p className={styles.paragraphRefundInf}>&nbsp;</p>
          <p className={styles.paragraphRefundInf}>
            Lieu of the participation fee, the organization may, provided the
            volunteer has not withdrawn for reasons for which the organization
            is responsible, demand adequate financial compensation.
          </p>
          <p className={styles.paragraphRefundInf}>
            {" "}
            The amount of compensation shall be determined by the participation
            fees minus the expenses saved by the organization and any gains it
            may make by using the voluntary placement otherwise.
          </p>
          <p className={styles.paragraphRefundInf}>
            Consideration of the commonly saved expenses and the commonly
            possible gains from use alternative of the voluntary placement,
            compensation is calculated as follows:
          </p>
        </div>

        <div className={styles.sectionThreeWrapper}>
          <img
            className={styles.imgSectionThree}
            alt=""
            src="/refundimg@2x.png"
          />
        </div>
      </div>

      <Footer />
      <FooterMobile />

      <LogoNav />
      <Nav />
    </div>
  );
};

export default WhatToExpect;
