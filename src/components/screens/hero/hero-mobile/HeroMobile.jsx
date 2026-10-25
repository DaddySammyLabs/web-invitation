import styles from "./HeroMobile.module.css";
import { useApp } from "@/context/AppContext";

import image from "@/assets/images/Sun_moon-pana.png";
import Animation from "@/components/ui/animation/hover-responsive/floating-image/FloatingImage";

const HeroMobile = ({ texts }) => {
  const { openModal } = useApp();
  return (
    <>
      <div className={styles.heroMobile}>
        <Animation image={image} number="first" />

        <div className={styles.info}>
          <h1 className={styles.author}>
            {texts.husband_name} & {texts.wife_name}
          </h1>
          <h2>{texts.invite_text}</h2>
          <h3 onClick={openModal}>
            <span>{texts.wedding_date}</span>
            <span>{texts.wedding_time2}</span>
            <span>{texts.weddingHall}</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default HeroMobile;
