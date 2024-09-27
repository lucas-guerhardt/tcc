"use client";
import { useState } from "react";
import styles from "./permutationAnimation.module.css";
import pages from "./pages";
import Permuter from "./permuter/permuter";

const PermutationAnimation = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setCurrentPage(0);
    }
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.explanation}>
        <div className={styles.explanationContainer}>
          {pages[currentPage].content}
          <button className={styles.nextBtn} onClick={nextPage}>
            Próximo
          </button>
        </div>
        <Permuter />
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
