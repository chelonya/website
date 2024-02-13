import FooterProjects from "../components/FooterProjects";
import NavHome from "../components/NavHome";
import LogoHome from "../components/LogoHome";
import styles from "./Project.module.css";

const Project = () => {
  return (
    <div className={styles.project}>
      <FooterProjects />
      <div className={styles.infesterillos}>
        <img className={styles.imgesteIcon} alt="" src="/imgeste@2x.png" />
        <div className={styles.titledescreste}>
          <p className={styles.esterillosPacificCoast}>
            ESTERILLOS, PACIFIC COAST
          </p>
          <p className={styles.esterillosPacificCoast}>&nbsp;</p>
          <p
            className={styles.asMatapaloAnd}
          >{`As Matapalo and Pacuare site in Esterillos the main focus of the site is the conservation of sea turtles such as green sea turtles (Chelonia mydas), olive ridley (Lepidochelys kempii), and hawksbill (Eretmochelys imbricata) turtles. `}</p>
          <p className={styles.asMatapaloAnd}>
            Another important responsibility of the project is the cleaning of
            the local beach and recycling of bottles and cans as Esterillos
            beach has a blue Flag which means they have a recognition for
            recycling. The cleaning walks are with a association of local woman.
            Other responsabilities are comunity service to local schools.
          </p>
        </div>
        <div className={styles.textactiveste}>
          <p className={styles.esterillosPacificCoast}>FREE TIME ACTIVITIES</p>
          <p className={styles.esterillosPacificCoast}>&nbsp;</p>
          <p className={styles.saturdayAfternoonsAnd}>
            Saturday afternoons and all day Sunday are free for volunteers to
            explore the local region. There are surfing and beach horseback
            riding lessons available within 100 meters of the site.
            Additionally, if volunteers wish to do longer trips, the nearby city
            of Quepos and the Manuel Antonio National Park are among the most
            popular choices. There is also a beautiful swimming hole and
            waterfall about a 30 minute hike from the site.
          </p>
        </div>
        <div className={styles.mapeste} />
        <div className={styles.textaccomeste}>
          <p className={styles.accommodations}>ACCOMMODATIONS</p>
          <p className={styles.accommodations}>&nbsp;</p>
          <p className={styles.theMatapaloSite}>
            The Matapalo site offers hostel-style accommodations. There are
            mixed gender accommodations with shared bathrooms.
          </p>
          <p className={styles.theMatapaloSite}>
            Three meals per day are provided at 8 am, 12 pm, and 6 pm. Coffee is
            served at breakfast and juice is served at lunch and dinner. 100%
            vegetarian food
          </p>
          <p className={styles.theMatapaloSite}>
            There is a restaurant and bar located nearby the site if volunteers
            would like to go there for a meal. The building beside the
            restaurant is a convenience store which is ideal for volunteers
            wanting a small snack or necessities such as shampoo and deodorant.
          </p>
        </div>
      </div>
      <div className={styles.infpacuare}>
        <div className={styles.mappacuare} />
        <div className={styles.textactivpacu}>
          <p className={styles.esterillosPacificCoast}>FREE TIME ACTIVITIES</p>
          <p className={styles.esterillosPacificCoast}>&nbsp;</p>
          <p className={styles.saturdayAfternoonsAnd}>
            You will have lots of free time throughout the week so while
            volunteering at Pacuare it is a good idea to bring books, music or
            movies that have been pre-downloaded. There are bike tours in the
            jungle available and volunteers will often play soccer and
            volleyball in their free time. There is also a bar located near the
            project site.
          </p>
        </div>
        <div className={styles.titledescrpacu}>
          <p className={styles.esterillosPacificCoast}>
            PACUARE, CARIBBEAN COAST
          </p>
          <p className={styles.likeAllOf}>
            Like all of our sites the main focus of the Pacuare site is the
            conservation of sea turtles such as leatherbacks (Dermochelys
            coriacea), green sea turtles (Chelonia mydas), and hawksbill turtles
            (Eretmochelys imbricata). The Pacaure site also helps to treat
            injured sea turtles more than the Matapalo site. Volunteers will
            engage in community service by keeping the beach clean and
            maintaining community facilities. Pacuare is slightly more isolated
            than the Matapalo site and requires a boat to access it.
          </p>
        </div>
        <div className={styles.textaccopacu}>
          <p className={styles.esterillosPacificCoast}>ACCOMMODATIONS</p>
          <p className={styles.esterillosPacificCoast}>&nbsp;</p>
          <p className={styles.thePacuareHouse}>
            The Pacuare house was built completely by locally sourced wood. The
            house has a rain water tank and solar panels in an effort to be as
            sustainable as possible. All of the rooms are mixed gender rooms.
            The rooms are also dorm style, with multiple bunk beds in each room.
            The site is slightly more rustic with showers located outside and
            limited access to electricity.
          </p>
        </div>
        <img className={styles.imgpacuIcon} alt="" src="/imgpacu@2x.png" />
      </div>
      <div className={styles.infmata}>
        <div className={styles.mapmatapalo} />
        <div className={styles.titledescriptionmata}>
          <div className={styles.matapaloPacificCoastParent}>
            <div className={styles.matapaloPacificCoast}>
              MATAPALO, PACIFIC COAST
            </div>
            <div className={styles.likeAllOf1}>
              Like all of our sites the main focus of the Matapalo site is the
              conservation of sea turtles such as leatherbacks (Dermochelys
              coriacea), green sea turtles (Chelonia mydas), olive ridley
              (Lepidochelys kempii), and hawksbill (Eretmochelys
              imbricata) turtles. The site also closely monitors the movement of
              local sloth populations so volunteers can expect to participate in
              4 or 5 "sloth walks" per week. Another important responsibility of
              the project is the cleaning of the local beach and recycling of
              bottles and cans.
            </div>
          </div>
        </div>
        <div className={styles.textaccommmata}>
          <p className={styles.esterillosPacificCoast}>ACCOMMODATIONS</p>
          <p className={styles.esterillosPacificCoast}>&nbsp;</p>
          <p className={styles.saturdayAfternoonsAnd}>
            The Matapalo site offers hostel-style accommodations. There are
            mixed gender accommodations with shared bathrooms. Three meals per
            day are provided at 8 am, 12 pm, and 6 pm. Coffee is served at
            breakfast and juice is served at lunch and dinner. 100% vegetarian
            food. There is a restaurant and bar located nearby the site if
            volunteers would like to go there for a meal. The building beside
            the restaurant is a convenience store which is ideal for volunteers
            wanting a small snack or necessities such as shampoo and deodorant.
          </p>
        </div>
        <div className={styles.imgmata}>
          <img className={styles.imgmataIcon} alt="" src="/imgmata@2x.png" />
        </div>
        <div className={styles.textactivmata}>
          <p className={styles.esterillosPacificCoast}>FREE TIME ACTIVITIES</p>
          <p className={styles.esterillosPacificCoast}>&nbsp;</p>
          <p className={styles.saturdayAfternoonsAnd}>
            Saturday afternoons and all day Sunday are free for volunteers to
            explore the local region. There are surfing and beach horseback
            riding lessons available within 100 meters of the site.
            Additionally, if volunteers wish to do longer trips, the nearby city
            of Quepos and the Manuel Antonio National Park are among the most
            popular choices. There is also a beautiful swimming hole and
            waterfall about a 30 minute hike from the site.
          </p>
        </div>
      </div>



      <img
        className={styles.bannerimgprojectsIcon}
        alt=""
        src="/bannerimgprojects@2x.png"
      />
      <div className={styles.bannertextprojects}>PROJECTS</div>




      <NavHome
        navHomeTop="38px"
        hOMEFontWeight="800"
        aBOUTUSFontWeight="800"
        sERVICESFontWeight="800"
        pROJECTSFontWeight="800"
        rEGISTERFontWeight="800"
      />
      <LogoHome logoHomeTop="32px" />
    </div>

    
  );
};

export default Project;
