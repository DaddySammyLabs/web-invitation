import { useApp } from "@/context/AppContext";

import styles from "./CaruselCard.module.css";

const WishesCard = ({
  nameAuthor,
  textsWish,
  attend,
  iconVisit,
  createdAt,
}) => {
  const { theme } = useApp();

  const isAttending = attend === "true";

  const icon =
    attend !== undefined
      ? isAttending
        ? "circle-check-big"
        : "circle-x"
      : iconVisit || "circle-x";

  const formatDate = (date) => {
    if (!date) return "Дата не указана";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Дата не указана";
    }

    return parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={`reviewCard ${styles.card}`}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                {nameAuthor?.[0]?.toUpperCase() || "?"}
              </div>
            </div>

            <div className={styles.authorInfo}>
              <div className={styles.authorRow}>
                <h4 className={styles.authorName}>{nameAuthor}</h4>

                <img
                  className={styles.statusIcon}
                  src={`/icons/${icon}.svg`}
                  alt={isAttending ? "Придёт" : "Не придёт"}
                  title={isAttending ? "Придёт" : "Не придёт"}
                />
              </div>

              <div className={styles.dateRow}>
                <img
                  className={styles.clockIcon}
                  src="/icons/clock-gray.svg"
                  alt=""
                />

                <time className={styles.date}>{formatDate(createdAt)}</time>
              </div>
            </div>
          </div>

          <p className={styles.wishText}>{textsWish}</p>
        </div>
      </div>
    </div>
  );
};

export default WishesCard;
