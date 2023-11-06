import { FunctionComponent } from "react";
import styles from "./BtnsCardsHome.module.css";

const BtnsCardsHome: FunctionComponent = () => {
  return (
    <div className={styles.btnscardshome}>
      <div className={styles.btnPacuare}>
        <b className={styles.btnText}>Pacuare</b>
      </div>
      <div className={styles.btnMatapalo}>
        <b className={styles.btnText}>Matapalo</b>
      </div>
      <div className={styles.btnEsterillos}>
        <b className={styles.btnText2}>Esterillos</b>
      </div>
    </div>
  );
};

export default BtnsCardsHome;
