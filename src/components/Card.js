import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ title, imageUrl, description, linkTo }) => {
  return (
    <Link to={linkTo} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={imageUrl} alt={title} />
        <div className={styles.cardContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
