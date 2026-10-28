import useInfiniteCarousel from "./useInfiniteCarousel";
import WishesCard from "./wish-card/CaruselCard";

import styles from "./WishesCarusel.module.css";

const WishesCarusel = ({ texts, wishes, loading, error, refetch }) => {
  const safeWishes = Array.isArray(wishes) ? wishes : [];

  const { containerRef, itemRef, carouselItems, scrollPrev, scrollNext } =
    useInfiniteCarousel(safeWishes, 3);

  if (loading) {
    return <p>{texts.wishes_uploading}</p>;
  }

  if (error) {
    return (
      <div className={styles.status}>
        <p role="alert">{error}</p>
        <button type="button" onClick={refetch}>
          {texts.try_again}
        </button>
      </div>
    );
  }

  if (safeWishes.length === 0) {
    return <p>{texts.no_requests}</p>;
  }

  return (
    <section className={styles.reviewBlock}>
      <h1>{texts.recent_wishes}</h1>

      <div className={styles.carusel}>
        <div className={styles.container} ref={containerRef}>
          {carouselItems.map((wish, index) => (
            <div key={`${wish.id}-${index}`} ref={index === 0 ? itemRef : null}>
              <WishesCard
                nameAuthor={wish.nameAuthor}
                textsWish={wish.textsWish}
                attend={wish.attend}
                iconVisit={wish.iconVisit}
                createdAt={wish.createdAt}
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
