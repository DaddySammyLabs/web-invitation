// import useAppState from "./useAppState";
// import { useApp } from "/context/AppContext";
import { useApp } from "@/context/AppContext";
import styles from "@/assets/styles/App.module.css";

import { AnimatedSection } from "@components/ui/animation/motion/MotionAnimation";

import ModalWindow from "@/components/ui/modal/modal-window/ModalWindow";

// import Header from "@/components/screens/header/Header";
import Hero from "@/components/screens/hero/Hero";
import SinceWedding from "@/components/ui/since-date/SinceWedding";
import Services from "@/components/screens/services/Services";
import Portfolio from "@/components/screens/portfolio/Portfolio";
import ReviewCarusel from "@/components/screens/reviews/ReviewCarusel";
import Guarantees from "@/components/screens/guarantee/Guarantees";

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
        <Services texts={texts} />
        <Portfolio texts={texts} />
      </AnimatedSection>

      <div className="container">
        <AnimatedSection delay={0.3}>
          <ReviewCarusel texts={texts} />
          <Guarantees texts={texts} />
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
