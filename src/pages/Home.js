import Card from "../components/Card";

import styles from "./Home.module.css";
import Nav from "../components/Nav";
import LogoNav from "../components/LogoNav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HamMenu from "../components/HamMenu";
import FooterMobile from "../components/FooterMobile";

const Home = () => { 
  return (
    <div>
      <HamMenu></HamMenu>
      <Banner
        bannerImg="/bannerHome.webp"
        bannerText="VOLUNTEERING A WORK OF HEART"
      />
      <div className={styles.contentHomeWraper}>
        <div className={styles.sectionOneHomeWrapper}>
          <p className={styles.titleOneHome}>
            <b>WELCOME TO ASVPA</b>
          </p>
          <p className={styles.descriptionOneHome}>
            {" "}
            Volunteer Association for Enviromental Protection
          </p>
        </div>

        <div className={styles.sectionTwoHomeWrapper}>
          <b className={styles.titleTwoHome}>
            VOLUNTEERING DRIVEN ECOLOGICAL CONSERVATION
          </b>

          <p className={styles.descriptionTwoHome}>
            At ASVPA's project sites, volunteers from around the world come
            together to engage in ecological conservation alongside local
            biologists. We primarily deal with the protection of sea turtles but
            we also work to keep local beaches clean and provide aid for injured
            animals such as sloths.
          </p>
        </div>
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.titleCard}>
          <b>PROJECTS</b>
        </div>

        <div className={styles.cardd}>
          <Card
            title="Matapalo"
            imageUrl="/mtpPerfil.png"
            description="Pacific Coast, mostly olive ridley sea turtles."
            linkTo="/projects"
          ></Card>
          <Card
            title="Pacuare"
            imageUrl="/pacuarePerfil.jpg"
            description="Caribbean Coast, mostly leatherback turtles."
            linkTo="/projects"
          ></Card>
        </div>
      </div>

      <Footer />
      <FooterMobile />
      <LogoNav />
      <Nav />
    </div>
  );
};

export default Home;
