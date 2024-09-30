"use client";
import { useState } from "react";
import styles from "./permutationAnimation.module.css";
import pages from "./pages";
import Permuter from "./permuter/permuter";

const PermutationAnimation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Controlar a animação

  const nextPage = () => {
    // Adiciona animação de escala quando mudar de página
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);

      // Atualiza a página depois da animação
      if (currentPage < pages.length - 1) {
        setCurrentPage((prevPage) => prevPage + 1);
      } else {
        setCurrentPage(0);
      }
    }, 300); // Duração da animação de 300ms
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
