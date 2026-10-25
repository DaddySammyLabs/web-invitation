import React from "react";
import styles from "./MapYandex.module.css";

const MapYandex = ({ texts }) => {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://yandex.com/maps/?ol=geo&text=Allama%20Muhammad%20Iqbal%20Street,%207&sll=64.426876,39.761720&sspn=0.006337,0.008211"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <img
          src="/icons/external-link.svg"
          alt=""
          aria-hidden="true"
          className={styles.icon}
        />

        <span className={styles.label}>{texts.view_map}</span>
      </a>
    </div>
  );
};

export default MapYandex;
