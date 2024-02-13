import styles from "./AboutUs.module.css";
import Nav from "../components/Nav";
import LogoNav from "../components/LogoNav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Banner bannerImg="bannerAboutUs.png" bannerText="ABOUT US" />

      <div className={styles.aboutUs}>
        <div className={styles.sectionone}>
          <div className={styles.ourMissionWrapper}>
            <div className={styles.titlemissionabouus}>OUR MISSION</div>
            <div className={styles.textmissionaboutus}>
              ASVPA strives to aid in species and environmental conservation,
              engaging in research and education in Costa Rica, while working to
              preserve natural resources.
            </div>
          </div>
          <div className={styles.ourVisionWrapper}>
            <div className={styles.titlevisionaboutus}>OUR VISION</div>
            <div className={styles.textvisionaboutus}>
              With the help of volunteers and community engagement, we can
              continue to protect the vulnerable sea turtle populations and
              other species living in the area. We have a competitive
              educational model of conservation, pursuing research and
              development projects with proactive, prospective, flexible and
              innovative character.
            </div>
          </div>
        </div>

        <div className={styles.sectiontwo}>
          <div className={styles.factsWrapper}>
            <div className={styles.textfacts}>
              <b>
                <p>Some Cool Facts</p>
                <p>{`These number were made with your support `}</p>
              </b>
            </div>

            <div className={styles.factone}>
              <div className={styles.figureoneaboutus}>
                <b className={styles.dataone}>{`93% `}</b>
              </div>

              <div className={styles.textdataone}>
                <p>{`Baby turtles `}</p>
                <p>made it to the sea</p>
              </div>
            </div>

            <div className={styles.facttwo}>
              <div className={styles.figureoneaboutus}>
                <b className={styles.datatwo}>310</b>
              </div>
              <div className={styles.textdatatwo}>
                <p>{`Turtles were `}</p>
                <p>seen on the beach</p>
              </div>
            </div>

            <div className={styles.factthree}>
              <div className={styles.figureoneaboutus}>
                <b className={styles.datathree}>242</b>
              </div>
              <div className={styles.textdatathree}>
                <p>Nests were</p>
                <p>{` found and protected `}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionthree}>
          <b className={styles.titlesectionthree}>
            OUR NATURE NEEDS VOLUNTEERS
          </b>

          <b className={styles.subtitlesectionthree}>
            <p className={styles.butWhatIs}>But what is being</p>
            <p className={styles.butWhatIs}> a volunteer?</p>
          </b>

          <div className={styles.textsectionthree}>
            <p className={styles.butWhatIs}>
              Voluntary refers to the subject who decides to provide a service
              or perform a job of his own free will, without being obliged to do
              so for legal, contractual, or economic reasons. In other words, a
              volunteer is a person who has the will to invest time and money to
              help a cause.
            </p>
            <p className={styles.butWhatIs}>Therefore.</p>
            <p className={styles.butWhatIs}>
              A volunteer does not go to a conservation project to complain. On
              the contrary, the volunteer is the person who looks for options
              and solutions in the face of adversity.
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
      </div>

      <Footer />

      <LogoNav />
      <Nav />
    </div>
  );
};

export default AboutUs;
