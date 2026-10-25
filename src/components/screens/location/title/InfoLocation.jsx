import React from "react";
import styles from "./InfoLocation.module.css";

const InfoLocation = ({ texts }) => {
  return (
    <div className={styles.header}>
      {/* <span className={styles.subtitle}>{texts.location_subtitle}</span> */}

      <h2 className={styles.title}>{texts.location}</h2>

      {/* <div className={styles.decoration}>
        <div className={styles.line} />
        <img src="/icons/map-pin1.svg" alt="map-pin" className={styles.icon} />
        <div className={styles.line} />
      </div> */}
    </div>
  );
};

export default InfoLocation;
