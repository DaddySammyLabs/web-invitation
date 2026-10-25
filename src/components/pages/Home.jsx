import { useApp } from "@/context/AppContext";
import styles from "@/assets/styles/App.module.css";

import { AnimatedSection } from "@components/ui/animation/motion/MotionAnimation";

import ModalWindow from "@/components/ui/modal/modal-window/ModalWindow";

import Hero from "@/components/screens/hero/Hero";
import SinceWedding from "@/components/ui/since-date/SinceWedding";
import ScheduleWedding from "../screens/schedule/ScheduleWedding";

import Portfolio from "@/components/screens/portfolio/Portfolio";
import Location from "@/components//screens/location/Location";
import WishesSection from "../screens/wishes-section/WishesSection";
import ReviewCarusel from "@/components/screens/reviews/ReviewCarusel";
import Footer from "@/components/ui/footer/Footer";

function Home({ texts }) {
  const { language, isMobile } = useApp();

  return (
    <>
      <div className="container">
        <AnimatedSection delay={0}>
          <Hero texts={texts} />
          <SinceWedding texts={texts} />
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.15}>
        <ScheduleWedding texts={texts} />
        <Portfolio texts={texts} />
      </AnimatedSection>

      <div className="container">
        <AnimatedSection delay={0.3}>
          <Location texts={texts} />
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <WishesSection texts={texts} />
          <ReviewCarusel texts={texts} />
          <Footer texts={texts} />
        </AnimatedSection>
      </div>

      <ModalWindow texts={texts}>
        <div>
          <h2
            className={`${styles.modalTitle} ${isMobile ? styles.mobile_mb : ""}`}
          >
            {texts.modalTitle}
          </h2>
          <p
            className={`${styles.modalText} ${isMobile ? styles.mobile_textsize : ""}`}
          >
            {texts.modalText}
            <b>{texts.modalInstagram}</b>
          </p>
        </div>
      </ModalWindow>
    </>
  );
}

export default Home;
