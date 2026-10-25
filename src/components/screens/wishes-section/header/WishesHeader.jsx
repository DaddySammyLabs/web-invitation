import styles from "./WishesHeader.module.css";

const WishesHeader = ({ texts }) => {
  return (
    <div className={styles.header}>
      <span className={styles.subtitle}>{texts.wishes_subtitle}</span>

      <h2 className={styles.title}>{texts.wishes}</h2>

      <div className={styles.decoration}>
        <div className={styles.line} />

        <img className={styles.icon} src="/icons/chat.svg" alt="chat" />

        <div className={styles.line} />
      </div>
    </div>
  );
};

export default WishesHeader;
