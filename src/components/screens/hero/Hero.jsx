import useResize from "@/hooks/providers/useResize";
import image from "@/assets/images/Sun_moon-pana.png";
import HeroMobile from "./hero-mobile/HeroMobile";

import styles from "./Hero.module.css";

// import Animation from "@/components/animation/AnimationHoverResponsive";
import Animation from "@/components/ui/animation/hover-responsive/floating-image/FloatingImage";

// import ThemeSwitcher from "../components/theme/ThemeSwitcher";

function Hero({ texts }) {
  const isMobile = useResize();

  return (
    <>
      {!isMobile ? (
        <div className={styles.hero}>
          <div className={styles.info}>
            <h1 className={styles.author}>
              {texts.husband_name} & {texts.wife_name}
            </h1>
            <h2>{texts.invite_text}</h2>
            <h3>
              <span>{texts.wedding_date}</span>
              <span>{texts.wedding_time2}</span>
              <span>{texts.weddingHall}</span>
            </h3>
          </div>
          <div className={styles.image}></div>
          <Animation image={image} number="first" />
        </div>
      ) : (
        <HeroMobile texts={texts} />
      )}
    </>
  );
}

export default Hero;
