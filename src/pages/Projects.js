/* eslint-disable no-irregular-whitespace */
import styles from "./Projects.module.css";
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
      <Banner bannerImg="bannerProjects.webp" bannerText="PROJECTS" />

      <div className={styles.sectionOneWrapper} id="seccion1">



        <div className={styles.twoWrapper}>

          <div className={styles.wrapperOne}>

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
          <div className={styles.wrapperImg}>
            <img className={styles.imgMtp} alt="" src="/imgMatapalo.jpg" />
          </div>
           
        </div>

        <div className={styles.twoWrapper}>

          <div className={styles.wrapperOne}>

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


          <div className={styles.wrapperOne}>
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



        <iframe className={styles.maps}
          title="Our Camp Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.1798431752873!2d-83.96473927033749!3d9.320917258080836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa16876c3305951%3A0x2507e41dda751bed!2sASVPA%20Matapalo%20Sea%20Turtle%20Conservation!5e0!3m2!1ses-419!2scr!4v1709147843601!5m2!1ses-419!2scr"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>




      </div>

      <div className={styles.sectionTwoWrapper}>
        <div className={styles.twoWrapper}>
          <div className={styles.wrapperOne}>
            <div className={styles.titleStyle}>PACUARE, CARIBBEAN SIDE</div>
            <p className={styles.paragraphStyle}>
              Like all of our sites the main focus of the Pacuare site is the
              conservation of sea turtles such as leatherbacks (Dermochelys
              coriacea), green sea turtles (Chelonia mydas), and hawksbill
              turtles (Eretmochelys imbricata). The Pacaure site also helps to
              treat injured sea turtles more than the Matapalo site. Volunteers
              will engage in community service by keeping the beach clean and
              maintaining community facilities. Pacuare is slightly more
              isolated than the Matapalo site and requires a boat to access it.
            </p>
          </div>
          <div className={styles.wrapperImg}>
            <img className={styles.imgMtp} alt="" src="/imgPacuare.jpg" />
          </div>
        </div>

        <div className={styles.twoWrapper}>
          <div className={styles.wrapperOne}>
            <div className={styles.titleStyle}>FREE TIME ACTIVITIES</div>
            <p className={styles.paragraphStyle}>
              You will have lots of free time throughout the week so while
              volunteering at Pacuare it is a good idea to bring books, music or
              movies that have been pre-downloaded. There are bike tours in the
              jungle available and volunteers will often play soccer and
              volleyball in their free time. There is also a bar located near
              the project site.
            </p>
          </div>
          <div className={styles.wrapperOne}>
            <div className={styles.titleStyle}>ACCOMMODATIONS</div>
            <p className={styles.paragraphStyle}>
              The Pacuare house was built completely by locally sourced wood.
              The house has a rain water tank and solar panels in an effort to
              be as sustainable as possible. All of the rooms are mixed gender
              rooms. The rooms are also dorm style, with multiple bunk beds in
              each room. The site is slightly more rustic with showers located
              outside and limited access to electricity.
            </p>
          </div>
        </div>
        <iframe className={styles.maps}
          title="Our Camp Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62824.42912939187!2d-83.27520109999999!3d10.2190271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa74040b6126fd3%3A0x5beca4394f5d93ea!2sTortugas%20de%20Pacuare!5e0!3m2!1ses-419!2scr!4v1709153353257!5m2!1ses-419!2scr"

          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
      <FooterMobile/>

      <LogoNav />
      <Nav />
    </div>
  );
};

export default WhatToExpect;
