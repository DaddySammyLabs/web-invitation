import { useCallback, useEffect, useRef } from "react";
// reviews нужно переписать под универсальный хук
// reviews -> items например

const useInfiniteCarousel = (items, visibleCount = 3) => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);

  const getCardWidth = useCallback(() => {
    if (!itemRef.current) return 0;
    return itemRef.current.offsetWidth;
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();
    const scrollWidth = cardWidth * visibleCount;

    if (container.scrollLeft <= 0) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = container.scrollWidth - scrollWidth * 2;
      container.style.scrollBehavior = "smooth";
    }

    if (container.scrollLeft >= container.scrollWidth - scrollWidth) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = scrollWidth;
      container.style.scrollBehavior = "smooth";
    }
  }, [getCardWidth, visibleCount]);

  const scrollPrev = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollLeft -= getCardWidth();
  }, [getCardWidth]);

  const scrollNext = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollLeft += getCardWidth();
  }, [getCardWidth]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();
    container.scrollLeft = cardWidth * visibleCount;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll, getCardWidth, visibleCount]);

  // Дублируем отзывы для бесконечного скролла
  const carouselItems = [...items, ...items, ...items];

  return {
    containerRef,
    itemRef,
    carouselItems,
    scrollPrev,
    scrollNext,
  };
};

export default useInfiniteCarousel;

// Было                       Стало
// reviews                    items
// visibleReviews             visibleCount
// prevReview                 scrollPrev
// nextReview                 scrollNext
// scrollNext                 scrollNext
// cardRef                    itemRef
