import WishList from "./WishList";
import styles from "./RecentWishes.module.css";

const RecentWishes = ({ texts, wishes, loading, error, refetch }) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <img src="/icons/scroll.svg" alt="" />
          {texts.recent_wishes}
        </h3>
      </div>

      <div className={styles.content}>
        <WishList
          texts={texts}
          wishes={wishes}
          loading={loading}
          error={error}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default RecentWishes;
