import schedule from "@/constants/schedule-lang/schedule";
import InfoSchedule from "./info-schedule/InfoSchedule";
import ScheduleCard from "./card-schedule/ScheduleCard";

import styles from "./ScheduleWedding.module.css";

const ScheduleWedding = ({ texts }) => {
  return (
    <div className={styles.container}>
      <InfoSchedule texts={texts} />

      {/* Заголовки таблицы — только Desktop */}
      <div className={styles.tableHeader}>
        <div className={styles.timeHeader}>{texts.time}</div>
        <div className={styles.activityHeader}>{texts.activity}</div>
        <div className={styles.descriptionHeader}>{texts.description}</div>
      </div>

      {/* Карточки */}
      <div className={styles.cards}>
        {schedule.map((item) => (
          <ScheduleCard
            key={item.time}
            image={item.image}
            time={item.time}
            title={texts[item.title]}
            description={texts[item.description]}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduleWedding;
