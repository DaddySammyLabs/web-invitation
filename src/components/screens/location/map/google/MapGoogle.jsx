import React from "react";
import styles from "./MapGoogle.module.css";

const MapGoogle = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7626020365574!2d64.42687597607837!3d39.76172010394903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e4b8e2a!2sAllama%20Muhammad%20Iqbal%20Street%2C%207%2C%20Bukhara%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1624271234567!5m2!1sen!2s"
        title="Google Maps location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.iframe}
      />
    </div>
  );
};

export default MapGoogle;
