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
      <div>
        <div className={styles.whatsappDiv}>
          <img alt="" src="/whatsapp.svg" />
          <b>+506 86161973</b>
        </div>

        <div className={styles.emailDiv}>
          <img alt="" src="/layer-11.svg" />
          <b>volunteercoordination@asvpa.org</b>
        </div>
      </div>
      <div className={styles.termsDiv}>
        <b>{`Terms & Conditions `}</b>
        <b>{`Privacy Policy `}</b>
      </div>
    </div>
  );
};

export default Footer;
