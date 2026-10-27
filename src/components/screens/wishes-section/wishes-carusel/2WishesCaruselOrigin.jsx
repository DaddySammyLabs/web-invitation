/* src/components/screens/reviews/ReviewCarusel.jsx */
import { useApp } from "@/context/AppContext";

import useInfiniteCarousel from "./useInfiniteCarousel";
import { reviews } from "./reviews.data";
import WishesCard from "./WishesCard";
import useResize from "@/hooks/providers/useResize";

import styles from "./WishesCarusel.module.css";

const WishesCarusel = ({ texts, wishes }) => {
  const { language = "ru" } = useApp();

  const isMobile = useResize();

  const { containerRef, itemRef, carouselItems, scrollPrev, scrollNext } =
    useInfiniteCarousel(reviews, 3);

  return (
    <section className={styles.reviewBlock}>
      <h1> {texts.recent_wishes}</h1>

      <div className={styles.carusel}>
        <div className={styles.container} ref={containerRef}>
          {carouselItems.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              ref={index === 0 ? itemRef : null}
            >
              <WishesCard
                name={review.name}
                link={review.link}
                text={review.text}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <span onClick={scrollPrev} className={`${styles.prew} ${styles.next}`}>
          <img src="/icons/arrow_left.svg" alt="Previous" />
        </span>

        <span onClick={scrollNext} className={styles.next}>
          <img src="/icons/arrow_right.svg" alt="Next" />
        </span>
      </div>
    </section>
  );
};

export default WishesCarusel;
