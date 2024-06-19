import styles from "./FooterMobile.module.css";
import React from "react";

const FooterMobile = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <a id = "email" href="mailto:volunteercoordination@asvpa.org">
          <div className={styles.iconName}>
            <img alt="" src="/email3.svg" />
            <b>Email</b>

          </div>
        </a>

        <a id= "whatsapp" href="https://wa.me/50686161973" target="_blank" rel="noreferrer">
          <div className={styles.iconName}>
            <img alt="" src="/wa2.svg" />
            <b>WhatsApp</b>

          </div>
        </a>

        <a id= "instagram" href="https://ig.me/m/tortugasvpa" target="_blank" rel="noreferrer">
          <div className={styles.iconName}>
            <img alt="" src="/instagram.svg" />
            <b>Instagram</b>

          </div>
        </a>
      </div>
      <div className={styles.text}>
        <a id= "terms and conditions" href="https://www.termsfeed.com/live/763603f9-fbc4-400f-be26-bd561ae72d60">
          <div>
            <b>Terms & Conditions</b>
          </div>
        </a>
        <div>
          <b>|</b>
        </div>
        <div>
          <b>Privacy Policy</b>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
