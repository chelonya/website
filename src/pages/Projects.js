import styles from "./Projects.module.css";
import Nav from "../components/Nav";
import LogoNav from "../components/LogoNav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const WhatToExpect = () => {
  return (
    <div>
      <Banner bannerImg="bannerProjects.png" bannerText="PROJECTS" />

      <div className={styles.sectionOneWrapper}>
        <div>
          <div>
            <div className={styles.titleStyle}>MATAPALO, PACIFIC COAST</div>
            <p className={styles.paragraphStyle}>
              Like all of our sites the main focus of the Matapalo site is the
              conservation of sea turtles such as leatherbacks (Dermochelys
              coriacea), green sea turtles (Chelonia mydas), olive ridley
              (Lepidochelys kempii), and hawksbill (Eretmochelys
              imbricata) turtles. The site also closely monitors the movement of
              local sloth populations so volunteers can expect to participate in
              4 or 5 "sloth walks" per week. Another important responsibility of
              the project is the cleaning of the local beach and recycling of
              bottles and cans.
            </p>
          </div>
          <div>
            <img className={styles.imgMtp} alt="" src="/imgmata@2x.png" />
          </div>
        </div>
        <div>
          <div>
            <div className={styles.titleStyle}>FREE TIME ACTIVITIES</div>
            <p className={styles.paragraphStyle}>
              Saturday afternoons and all day Sunday are free for volunteers to
              explore the local region. There are surfing and beach horseback
              riding lessons available within 100 meters of the site.
              Additionally, if volunteers wish to do longer trips, the nearby
              city of Quepos and the Manuel Antonio National Park are among the
              most popular choices. There is also a beautiful swimming hole and
              waterfall about a 30 minute hike from the site.
            </p>
          </div>
          <div>
            <div className={styles.titleStyle}>ACCOMMODATIONS</div>
            <p className={styles.paragraphStyle}>
              The Matapalo site offers hostel-style accommodations. There are
              mixed gender accommodations with shared bathrooms. Three meals per
              day are provided at 8 am, 12 pm, and 6 pm. Coffee is served at
              breakfast and juice is served at lunch and dinner. 100% vegetarian
              food. There is a restaurant and bar located nearby the site if
              volunteers would like to go there for a meal. The building beside
              the restaurant is a convenience store which is ideal for
              volunteers wanting a small snack or necessities such as shampoo
              and deodorant.
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

export default WhatToExpect;
