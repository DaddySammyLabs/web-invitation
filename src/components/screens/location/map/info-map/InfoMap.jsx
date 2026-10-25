import React from "react";
import MapYandex from "../yandex/MapYandex";

import styles from "./InfoMap.module.css";

const InfoMap = ({ texts }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={styles.title}>{texts.weddingHall}</h3>

        <div className={styles.details}>
          <div className={styles.addressRow}>
            <img
              src="/icons/map-pin.svg"
              alt="map-pin"
              className={`${styles.icon} ${styles.addressIcon}`}
            />

            <p className={styles.address}>{texts.address}</p>
          </div>

          <div className={styles.infoRow}>
            <img
              src="/icons/calendar-check.svg"
              alt="calendar"
              className={styles.icon}
            />

            <p className={styles.text}>{texts.wedding_date}</p>
          </div>

          <div className={styles.infoRow}>
            <img src="/icons/clock1.svg" alt="clock" className={styles.icon} />

            <p className={styles.text}>{texts.wedding_time2}</p>
          </div>

          <MapYandex texts={texts} />
        </div>
      </div>
    </div>
  );
};

export default InfoMap;
