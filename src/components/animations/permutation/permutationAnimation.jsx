"use client";
import { useState, useEffect } from "react";
import styles from "./permutationAnimation.module.css";
import pages from "./pages";
import Permutator from "./permutator/permutator";

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
      <div className={styles.explanationContainer}>
        <div className={styles.explanation}>
          {pages[currentPage].content}
          <button className={styles.nextBtn} onClick={nextPage}>
            Próximo
          </button>
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

      <div className={styles.permutatorContainer}>
        <Permutator />
      </div>
    </div>
  );
};

export default PermutationAnimation;
