import CardsHome from "../components/CardsHome";
import styles from "./Home.module.css";
import Nav from "../components/Nav";
import LogoNav from "../components/LogoNav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HamMenu from "../components/HamMenu";


const Home = () => {
  return (
    <div>
      <HamMenu></HamMenu>
      <Banner
        bannerImg="bannerHero.jpeg"
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

      <div className={styles.sectionThreeHomeWrapper}>

        <div className={styles.titleThreeHome}>Projects</div>
        <CardsHome />
      
        
      </div>

      <Footer />

      <LogoNav />
      <Nav />
    </div>
  );
};

export default Home;
