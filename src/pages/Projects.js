import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.bannersection}>
        <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
        <nav className={styles.navservices}>
          <b className={styles.home}>HOME</b>
          <b className={styles.home}>ABOUT US</b>
          <b className={styles.home}>SERVICES</b>
          <b className={styles.home}>PROJECTS</b>
          <div className={styles.btnregister}>
            <b className={styles.register}>REGISTER</b>
          </div>
        </nav>
        <div className={styles.bannertextprojects}>PROJECTS</div>
      </div>
      <div className={styles.infmata}>
        <div className={styles.titledescriptionmata}>
          <div className={styles.matapaloPacificCoastParent}>
            <div className={styles.matapaloPacificCoast}>
              MATAPALO, PACIFIC COAST
            </div>
            <div className={styles.likeAllOf}>
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
        <div className={styles.imgmata}>
          <img className={styles.imgmataIcon} alt="" src="/imgmata@2x.png" />
        </div>
        <div className={styles.textaccommmata}>
          <p className={styles.accommodations}>ACCOMMODATIONS</p>
          <p className={styles.accommodations}>&nbsp;</p>
          <p className={styles.theMatapaloSite}>
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
        <div className={styles.textactivmata}>
          <p className={styles.accommodations}>FREE TIME ACTIVITIES</p>
          <p className={styles.accommodations}>&nbsp;</p>
          <p className={styles.theMatapaloSite}>
            Saturday afternoons and all day Sunday are free for volunteers to
            explore the local region. There are surfing and beach horseback
            riding lessons available within 100 meters of the site.
            Additionally, if volunteers wish to do longer trips, the nearby city
            of Quepos and the Manuel Antonio National Park are among the most
            popular choices. There is also a beautiful swimming hole and
            waterfall about a 30 minute hike from the site.
          </p>
        </div>
        <div className={styles.mapmatapalo} />
      </div>
      <div className={styles.infpacuare}>
        <div className={styles.titledescrpacu}>
          <p className={styles.accommodations}>PACUARE, CARIBBEAN COAST</p>
          <p className={styles.likeAllOf1}>
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
        <img className={styles.imgpacuIcon} alt="" src="/imgpacu@2x.png" />
        <div className={styles.textaccopacu}>
          <p className={styles.accommodations}>ACCOMMODATIONS</p>
          <p className={styles.accommodations}>&nbsp;</p>
          <p className={styles.thePacuareHouse}>
            The Pacuare house was built completely by locally sourced wood. The
            house has a rain water tank and solar panels in an effort to be as
            sustainable as possible. All of the rooms are mixed gender rooms.
            The rooms are also dorm style, with multiple bunk beds in each room.
            The site is slightly more rustic with showers located outside and
            limited access to electricity.
          </p>
        </div>
        <div className={styles.textactivpacu}>
          <p className={styles.accommodations}>FREE TIME ACTIVITIES</p>
          <p className={styles.accommodations}>&nbsp;</p>
          <p className={styles.theMatapaloSite}>
            You will have lots of free time throughout the week so while
            volunteering at Pacuare it is a good idea to bring books, music or
            movies that have been pre-downloaded. There are bike tours in the
            jungle available and volunteers will often play soccer and
            volleyball in their free time. There is also a bar located near the
            project site.
          </p>
        </div>
        <div className={styles.mappacuare} />
      </div>
      <div className={styles.infesterillos}>
        <div className={styles.titledescreste}>
          <p className={styles.accommodations}>ESTERILLOS, PACIFIC COAST</p>
          <p className={styles.accommodations}>&nbsp;</p>
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
        <img className={styles.imgesteIcon} alt="" src="/imgeste@2x.png" />
        <div className={styles.textaccomeste}>
          <p className={styles.accommodations2}>ACCOMMODATIONS</p>
          <p className={styles.accommodations2}>&nbsp;</p>
          <p className={styles.threeMealsPer}>
            The Matapalo site offers hostel-style accommodations. There are
            mixed gender accommodations with shared bathrooms.
          </p>
          <p className={styles.threeMealsPer}>
            Three meals per day are provided at 8 am, 12 pm, and 6 pm. Coffee is
            served at breakfast and juice is served at lunch and dinner. 100%
            vegetarian food
          </p>
          <p className={styles.threeMealsPer}>
            There is a restaurant and bar located nearby the site if volunteers
            would like to go there for a meal. The building beside the
            restaurant is a convenience store which is ideal for volunteers
            wanting a small snack or necessities such as shampoo and deodorant.
          </p>
        </div>
        <div className={styles.textactiveste}>
          <p className={styles.accommodations}>FREE TIME ACTIVITIES</p>
          <p className={styles.accommodations}>&nbsp;</p>
          <p className={styles.theMatapaloSite}>
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
      </div>
      <div className={styles.footerservices}>
        <img
          className={styles.footerwrapperIcon}
          alt=""
          src="/footerwrapper@2x.png"
        />
        <div className={styles.wasection}>
          <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
          <b className={styles.register}>+506 86161973</b>
        </div>
        <div className={styles.termsppsection}>
          <b className={styles.register}>{`Terms & Conditions `}</b>
          <b className={styles.register}>{`Privacy Policy `}</b>
        </div>
        <div className={styles.emailsection}>
          <img className={styles.layer1Icon} alt="" src="/layer-1@2x.png" />
          <b className={styles.register}>volunteercoordination@asvpa.org</b>
        </div>
      </div>
    </div>
  );
};

export default Projects;
