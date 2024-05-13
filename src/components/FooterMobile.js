import styles from "./FooterMobile.module.css";
import React from "react";

const FooterMobile = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>

       
      <a href="mailto:volunteercoordination@asvpa.org">
          <div>
            <img alt="" src="/email3.svg" />
          </div>
        </a>

        <a href="https://wa.me/50686161973" target="_blank" rel="noreferrer">
          <div>
            <img alt="" src="/wa2.svg" />
          </div>
        </a>
         
    
        <a href="https://ig.me/m/tortugasvpa" target="_blank" rel="noreferrer">
          <div>
            <img alt="" src="/instagram.svg" />
          </div>
        </a>
      </div>
      <div className={styles.text}>
        <a href="https://www.termsfeed.com/live/763603f9-fbc4-400f-be26-bd561ae72d60">
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
