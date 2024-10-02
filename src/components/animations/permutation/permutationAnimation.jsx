"use client";
import { useEffect, useState } from "react";
import styles from "./permutationAnimation.module.css";
import pages from "./pages";
import Permuter from "./permuter/permuter";
import Game from "./game/game";

const PermutationAnimation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    document.title = "Permutação | INSIGHT";
  }, []);

  const nextPage = () => {
    if (currentPage === pages.length - 1) {
      setShowConfirmation(true);
      return;
    }

    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);

      if (currentPage < pages.length - 1) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, 300);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const startActivity = () => {
    setShowConfirmation(false);
    setStartGame(true);
  };

  const cancelActivity = () => {
    setShowConfirmation(false);
    setCurrentPage(0);
  };

  return (
    <div className={styles.container}>
      {startGame ? (
        <Game />
      ) : (
        <>
          {!showConfirmation ? (
            <div
              className={`${styles.explanationContainer} ${
                isAnimating ? styles["scale-up"] : ""
              }`}
            >
              <div className={styles.explanation}>
                {pages[currentPage].content}
                <button
                  className={`${styles.nextBtn} ${
                    currentPage === pages.length - 1
                      ? styles.startActivityBtn
                      : ""
                  }`}
                  onClick={nextPage}
                >
                  {currentPage === pages.length - 1
                    ? "Iniciar Atividade"
                    : "Próximo"}
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
          ) : (
            <div className={styles.confirmationContainer}>
              <p>Deseja realmente iniciar a atividade?</p>
              <button className={styles.proceedBtn} onClick={startActivity}>
                Prosseguir
              </button>
              <button className={styles.cancelBtn} onClick={cancelActivity}>
                Cancelar
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PermutationAnimation;
