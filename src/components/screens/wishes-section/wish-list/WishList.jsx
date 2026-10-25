import { useAutoAnimate } from "@formkit/auto-animate/react";

import useShowMore from "@/hooks/images/useShowMore";

import WishCard from "./wish-card/WishCard";
import ShowMoreHide from "@/components/ui/buttons/ShowMoreHide";

import styles from "./WishList.module.css";

const WishList = ({ texts, wishes, loading, error, refetch }) => {
  const [parent] = useAutoAnimate();

  const safeWishes = Array.isArray(wishes) ? wishes : [];

  const { visibleItems, showAll, handleToggle } = useShowMore(safeWishes, 5, 3);

  if (loading) {
    return <p>{texts.wishes_uploading}</p>;
  }

  if (error) {
    return (
      <div className={styles.status}>
        <p role="alert">{error}</p>
        <button type="button" onClick={refetch} className={styles.retryButton}>
          {texts.try_again}
        </button>
      </div>
    );
  }

  if (safeWishes.length === 0) {
    return <p>{texts.no_requests}</p>;
  }

  return (
    <>
      <div ref={parent} className={styles.list}>
        {visibleItems.map((wish) => (
          <div key={wish.id} className={styles.item}>
            <WishCard
              texts={texts}
              textsWish={wish.textsWish}
              nameAuthor={wish.nameAuthor}
              attend={wish.attend}
              iconVisit={wish.iconVisit}
              createdAt={wish.createdAt}
            />
          </div>
        ))}
      </div>

      {safeWishes.length > 5 && (
        <div className={styles.showMore}>
          <ShowMoreHide
            handleToggle={handleToggle}
            showAll={showAll}
            more={texts.show_more}
            hide={texts.hide}
          />
        </div>
      )}
    </>
  );
};

export default WishList;
