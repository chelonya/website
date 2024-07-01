import { useMemo } from "react";
import styles from "./Footer.module.css";
const Footer = ({ colorFooter = "/rectangle-132.svg" }) => {
  return (
    <div
      className={styles.footer}
      style={{
        backgroundImage: `url(${colorFooter})`,
      }}
    >
      <div className={styles.wrapRight}>
        <div className={styles.descrFooter}>
          <b>GET IN TOUCH</b>
        </div>
        <div className={styles.descrFooter2}>
          <b>Protecting our oceans, one flipper at a time.</b>
        </div>
      </div>

      <div className={styles.wrapLeft}>
        <a href="https://wa.me/50686161973" target="_blank" rel="noreferrer">
          <div className={styles.whatsappDiv}>
            <img alt="" src="/wa2.svg" />
            <b>+506 86161973</b>
          </div>
        </a>
        <a href="mailto:volunteercoordination@asvpa.org">
          <div className={styles.emailDiv}>
            <img alt="" src="/email3.svg" />
            <b>volunteercoordination@asvpa.org</b>
          </div>
        </a>
        <a href="https://ig.me/m/tortugasvpa" target="_blank" rel="noreferrer">
          <div className={styles.instaDiv}>
            <img alt="" src="/instagram.svg" />
            <b>@tortugasvpa</b>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
