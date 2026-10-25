import React from "react";
import styles from "./InfoSchedule.module.css";

const InfoSchedule = ({ texts }) => {
  return (
    <div className={styles.info}>
      <span className={styles.subtitle}>{texts.schedule_subtitle}</span>

      <h2 className={styles.title}>{texts.schedule_title}</h2>

      <div className={styles.clockDecoration}>
        <div className={styles.clockLine} />

        <img src="/icons/clock.svg" alt="clock" className={styles.clockIcon} />

        <div className={styles.clockLine} />
      </div>

      <div className={styles.texts}>
        <p className={styles.description}>{texts.schedule_texts}</p>

        <p className={styles.note}>{texts.schedule_texts2}</p>
      </div>

      <div className={styles.bottomDecoration}>
        <div className={styles.bottomLine} />
        <div className={styles.dot} />
        <div className={styles.bottomLine} />
      </div>
    </div>
  );
};

export default InfoSchedule;
