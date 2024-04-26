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
          <a href="mailto:volunteercoordination@asvpa.org">volunteercoordination@asvpa.org</a>
        </div>
      </div>

      <div>
        <div>
          {" "}
          <b>Terms & Conditions</b>
        </div>
        <div>
          {" "}
          <b>Privacy Policy</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
