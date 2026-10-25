import useFetch from "@/hooks/api/useFetch";

import WishesHeader from "./header/WishesHeader";
import FormWishes from "./form/FormWishes";
import RecentWishes from "./wish-list/RecentWishes";
import styles from "./WishesSection.module.css";

const API_URL = "https://daf3a6a6494c298f.mokky.dev/wishes";

const WishesSection = ({ texts }) => {
  const { data: wishes, loading, error, refetch } = useFetch(API_URL);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <WishesHeader texts={texts} />

        <div className={styles.content}>
          <FormWishes texts={texts} refetch={refetch} />

          {/* <CaruselWishes /> */}

          <RecentWishes
            texts={texts}
            wishes={wishes}
            loading={loading}
            error={error}
            refetch={refetch}
          />
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
