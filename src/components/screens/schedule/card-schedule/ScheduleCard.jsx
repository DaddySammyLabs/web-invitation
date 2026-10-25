import React from "react";
import styles from "./ScheduleCard.module.css";

const ScheduleCard = ({ image, time, title, description }) => {
  return (
    <div className={styles.wrapper}>
      {/* Фоновый градиент */}
      <div className={styles.gradient} />

      {/* Карточка */}
      <div className={styles.card}>
        {/* Desktop */}
        <div className={styles.desktop}>
          <div className={styles.timeBlock}>
            <div className={styles.iconBox}>
              <img src={image} alt="" className={styles.icon} />
            </div>

            <span className={styles.time}>{time}</span>
          </div>

          <div className={styles.titleBlock}>
            <h3 className={styles.activityTitle}>{title}</h3>
          </div>

          <div className={styles.descriptionBlock}>
            <p className={styles.description}>{description}</p>
          </div>
        </div>

        {/* Mobile */}
        <div className={styles.mobile}>
          <div className={styles.mobileHeader}>
            <div className={styles.mobileTitleBlock}>
              <div className={styles.iconBox}>
                <img src={image} alt="" className={styles.icon} />
              </div>

              <h3 className={styles.activityTitle}>{title}</h3>
            </div>

            <span className={styles.time}>{time}</span>
          </div>

          <div className={styles.mobileDescription}>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
