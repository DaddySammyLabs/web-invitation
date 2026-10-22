import useWeddingTimer from "@/hooks/useWeddingTimer";
import styles from "./SinceWedding.module.css";

const SinceWedding = ({ texts }) => {
  const time = useWeddingTimer();

  const title = time.isWeddingPassed
    ? texts.since_wedding
    : texts.until_wedding;

  const timeUnits = [
    { value: time.days, label: texts.days },
    { value: time.hours, label: texts.hours },
    { value: time.minutes, label: texts.minutes },
    { value: time.seconds, label: texts.seconds },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.grid}>
        {timeUnits.map(({ value, label }) => (
          <div key={label} className={styles.timeCard}>
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinceWedding;
