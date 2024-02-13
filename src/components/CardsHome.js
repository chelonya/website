import styles from "./CardsHome.module.css";

const CardsProjectHome = () => {
  return (
    <div className={styles.cardsprojecthome}>
      <div className={styles.cardMatapalo}>
        <img alt="" src="/card--esterillos@2x.png" />
        <div className={styles.btnscardshome}>
          <div className={styles.btnMatapalo}>Matapalo</div>
        </div>
      </div>
      <div className={styles.cardPacuare}>
        <img alt="" src="/card--pacuare@2x.png" />
        <div className={styles.btnscardshome}>
          <div className={styles.btnPacuare}>Pacuare</div>
        </div>
      </div>
    </div>
  );
};

export default CardsProjectHome;
