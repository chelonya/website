import { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openAboutUs, setOpenAboutUs] = useState(false);
  return (
    <div className={styles.navComponent}>
      <div className={styles.navContainer}>
        <div className={styles.navItem}>
          <Link to="/">HOME</Link>
        </div>
        <div className={styles.navItem}>
          <div className={styles.aboutUsTrigger} onClick={()=>setOpenAboutUs(!openAboutUs)}>
            ABOUT US
          </div>
          <div className={`${styles.aboutUsList} ${openAboutUs ? styles.openState : styles.closeState}`}>
            <ul className={styles.myList}>
              <li>
                <Link to="/about-us">ABOUT US</Link>
              </li>
              <li>
                <Link to="/what-to-expect">WHAT TO EXPECT</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.navItem}>
        <Link to="/services">SERVICES</Link>
        </div>
        <div className={styles.navItem}>
        <Link to="/projects">PROJECTS</Link>
        </div>
        <div className={styles.navItemRegister}>
        <Link to="/register">REGISTER</Link>


        </div>
      </div>
    </div>
  );
};

export default Nav;
