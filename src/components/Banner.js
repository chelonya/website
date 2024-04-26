/* 
  Donde llamo al componente tengo que crear la logica para que llame a 
  una foto especifica de acuerdo a la pagina donde este
  */
 
import styles from "./Banner.module.css";

const Banner = ({ bannerImg, bannerText }) => {
  return (
    <div
      className={styles.bannerContainer}
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className={styles.bannerText}>{bannerText}</div>
    </div>
  );
};
export default Banner;
