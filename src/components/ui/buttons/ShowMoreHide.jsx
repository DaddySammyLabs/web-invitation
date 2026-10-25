import styles from "./ShowMoreHide.module.css";

const ShowMoreHide = ({ handleToggle, more, hide, showAll }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={handleToggle} className={styles.button} type="button">
        {/* {showAll ? hide : more} */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${styles.arrow} ${showAll ? styles.arrowOpen : ""}`}
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default ShowMoreHide;
