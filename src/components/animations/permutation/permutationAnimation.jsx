"use client";
import { useState } from "react";
import styles from "./permutationAnimation.module.css";
import pages from "./pages";
import Permuter from "./permuter/permuter";

const PermutationAnimation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextPage = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);

      if (currentPage < pages.length - 1) {
        setCurrentPage((prevPage) => prevPage + 1);
      } else {
        setCurrentPage(0);
      }
    }, 300);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.explanationContainer} ${
          isAnimating ? styles["scale-up"] : ""
        }`}
      >
        <div className={styles.explanation}>
          {pages[currentPage].content}
          <button className={styles.nextBtn} onClick={nextPage}>
            Próximo
          </button>
        </div>

        <div className={styles.postIt}>
          <Permuter />
        </div>

        <div className={styles.pageIndicators}>
          {pages.map((_, index) => (
            <div
              key={index}
              className={`${styles.pageIndicator} ${
                index === currentPage ? styles.active : ""
              }`}
              onClick={() => goToPage(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PermutationAnimation;
