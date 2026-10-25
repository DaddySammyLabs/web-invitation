import { useState, useEffect, useCallback } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import axios from "axios";

import useFetch from "@/hooks/api/useFetch";
import useShowMore from "@/hooks/images/useShowMore";

import WishCard from "./wish-card/WishCard";
import ShowMoreHide from "@/components/ui/buttons/ShowMoreHide";

import styles from "./WishList.module.css";

const API_URL = "https://daf3a6a6494c298f.mokky.dev/wishes";

const WishList = ({ texts, refreshKey = 0 }) => {
  const [parent] = useAutoAnimate();

  //  const {
  //   data: wishes,
  //   loading,
  //   error,
  //   refetch,
  // } = useFetch(API_URL, refreshKey);

  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWishes = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setWishes(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error("Ошибка загрузки wishes:", err);
      setError("Не удалось загрузить пожелания.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWishes();
  }, [fetchWishes, refreshKey]);

  const { visibleItems, showAll, handleToggle } = useShowMore(wishes, 5, 3);

  if (loading) {
    return <p>{texts.wishes_uploading}</p>;
  }

  if (error) {
    return (
      <div className={styles.status}>
        <p role="alert">{error}</p>
        <button
          type="button"
          onClick={fetchWishes}
          className={styles.retryButton}
        >
          {texts.try_again}
        </button>
      </div>
    );
  }

  if (wishes.length === 0) {
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

      {wishes.length > 5 && (
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
