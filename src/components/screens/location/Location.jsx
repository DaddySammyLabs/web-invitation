import InfoLocation from "./title/InfoLocation";
import LocationMap from "./map/LocationMap";

import styles from "./Location.module.css";

const Location = ({ texts }) => {
  return (
    // <section id="location" className={styles.location}>
    <section className={styles.location}>
      <div className={styles.container}>
        <InfoLocation texts={texts} />
        <LocationMap texts={texts} />
        {/* <VideoNavigation texts={texts} /> */}
      </div>
    </section>
  );
};

export default Location;
