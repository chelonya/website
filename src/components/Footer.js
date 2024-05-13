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

      
      <div className={styles.wrapLeft}>
        <a href="https://wa.me/50686161973" target="_blank" rel="noreferrer">
          <div className={styles.whatsappDiv}>
            <img alt="" src="/whatsapp.svg" />
            <b>+506 86161973</b>
          </div>
        </a>
        <a href="mailto:volunteercoordination@asvpa.org">
          <div className={styles.emailDiv}>
            <img alt="" src="/email.svg" />
            <b>volunteercoordination@asvpa.org</b>
          </div>
        </a>
      </div>

      <div className={styles.wrapRight}>
        <a href="https://www.termsfeed.com/live/763603f9-fbc4-400f-be26-bd561ae72d60" target="_blank" rel="noreferrer">
          <div>
            {" "}
            <b>Terms & Conditions</b>
          </div>
        </a>
        <div>
          {" "}
          <b>Privacy Policy</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
