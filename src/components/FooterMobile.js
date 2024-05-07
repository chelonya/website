import styles from "./FooterMobile.module.css";
import React from "react";

const FooterMobile = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.icons}>
        <div>
          <img alt="" src="/email2.svg" />
        </div>
        <div>
          <img alt="" src="/wa2.svg" />
        </div>
        <div>
          <img alt="" src="/instagram.svg" />
        </div>
      </div>
      <div className={styles.text}>
        <div>
          <b>Terms & Conditions</b>
        </div>
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
