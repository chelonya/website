import styles from "./HamMenu.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const HamMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamMenuContainer}>
      <div
        className={`${styles.menuToggle} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/what-to-expect">What to expect</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/register">REGISTER</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.logoNavComponent}>
        <img className={styles.imgLogoNav} alt="" src="/logoAsvpa.svg"/>
        <Link to="/">
          <b className={styles.textLogoNav}>ASVPA</b>
        </Link>
      </div>
    </div>
  );
};

export default HamMenu;
