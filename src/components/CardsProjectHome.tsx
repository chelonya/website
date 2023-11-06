import { FunctionComponent } from "react";
import styles from "./CardsProjectHome.module.css";

const CardsProjectHome: FunctionComponent = () => {
  return (
    <div className={styles.cardsprojecthome}>
      <img
        className={styles.cardMatapalo}
        alt=""
        src="/card--matapalo@2x.png"
      />
      <img className={styles.cardPacuare} alt="" src="/card--pacuare@2x.png" />
      <img
        className={styles.cardMatapalo}
        alt=""
        src="/card--esterillos@2x.png"
      />
    </div>
  );
};

export default CardsProjectHome;
