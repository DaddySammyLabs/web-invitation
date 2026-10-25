import React, { useState } from "react";

import WishesHeader from "./header/WishesHeader";
import FormWishes from "./form/FormWishes";
import RecentWishes from "./wish-list/RecentWishes";
import styles from "./WishesSection.module.css";

const WishesSection = ({ texts }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleWishAdded = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <WishesHeader texts={texts} />

        <div className={styles.content}>
          <FormWishes texts={texts} onWishAdded={handleWishAdded} />

          {/* <CaruselWishes /> */}

          <RecentWishes texts={texts} refreshKey={refreshKey} />
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
