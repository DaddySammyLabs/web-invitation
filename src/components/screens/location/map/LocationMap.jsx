import React from "react";
import MapGoogle from "./google/MapGoogle";
import InfoMap from "./info-map/InfoMap";

import styles from "./LocationMap.module.css";

const LocationMap = ({ texts }) => {
  return (
    <div className={styles.mapLayout}>
      <MapGoogle />
      <InfoMap texts={texts} />
    </div>
  );
};

export default LocationMap;
