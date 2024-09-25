"use client";
import { useState, useEffect } from "react";
import styles from "./permutationAnimation.module.css";

const PermutationAnimation = () => {
  const [word, setWord] = useState("");
  const [permutations, setPermutations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(500);

  const permute = (str) => {
    if (str.length <= 1) return [str];
    let result = [];
    for (let i = 0; i < str.length; i++) {
      const firstChar = str[i];
      const remainingChars = str.slice(0, i) + str.slice(i + 1);
      const innerPermutations = permute(remainingChars);
      for (let permutation of innerPermutations) {
        if (!result.includes(firstChar + permutation)) {
          result.push(firstChar + permutation);
        }
      }
    }
    return result;
  };

  const startPermutation = () => {
    const permutedWords = permute(word);
    setPermutations(permutedWords);
    setCurrentIndex(0);
  };

  useEffect(() => {
    if (permutations.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === permutations.length - 1 ? 0 : prevIndex + 1
        );
      }, speed);

      return () => clearInterval(interval);
    }
  }, [permutations, speed]);

  const increaseSpeed = () => {
    setSpeed((prevSpeed) => Math.max(100, prevSpeed - 100));
  };

  const decreaseSpeed = () => {
    setSpeed((prevSpeed) => Math.min(5000, prevSpeed + 100));
  };

  return (
    <div className={styles.container}>
      <div className={styles.explanation}>
        <p className={styles.explanationText}>
          <span className={styles.highlighted}>Permutação</span> é basicamente o
          ato de pegar um conjunto de coisas e rearranjar tudo de todas as
          formas possíveis! Imagine que você tem uma caixa cheia de letras. Você
          joga essas letras para o ar, e cada vez que elas caem no chão, elas
          formam uma nova ordem. Esse processo de rearranjar as letras é o que a
          gente chama de <span className={styles.highlighted}>permutação</span>.
        </p>
        <p className={styles.explanationText}>
          Vamos usar a palavra{" "}
          <span className={styles.highlighted}>
            <strong>SOL</strong>
          </span>{" "}
          como exemplo. Se você jogar as letras{" "}
          <span className={styles.highlighted}>
            <strong>S</strong>
          </span>
          ,{" "}
          <span className={styles.highlighted}>
            <strong>O</strong>
          </span>
          , e{" "}
          <span className={styles.highlighted}>
            <strong>L</strong>
          </span>{" "}
          para o ar, elas podem cair em diferentes ordens, como:
        </p>
        <ul className={styles.exampleList}>
          <li>
            <span className={styles.highlighted}>
              <strong>SOL</strong>
            </span>{" "}
            (ok, essa foi a primeira, sem mudança, mas vamos jogar mais!)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>SLO</strong>
            </span>{" "}
            (opa, mudou um pouquinho)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>OSL</strong>
            </span>{" "}
            (mais uma mistura)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>OLS</strong>
            </span>{" "}
            (agora está bem diferente)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>LSO</strong>
            </span>{" "}
            (continua bem diferente)
          </li>
          <li>
            <span className={styles.highlighted}>
              <strong>LOS</strong>
            </span>{" "}
            (essa foi a última possibilidade!)
          </li>
        </ul>
        <p className={styles.explanationText}>
          No final, com 3 letras, você pode formar 6 diferentes combinações, que
          são as permutações da palavra{" "}
          <span className={styles.highlighted}>
            <strong>SOL</strong>
          </span>
          . Isso é <span className={styles.highlighted}>3!</span> (fatorial de
          3).
        </p>
      </div>

      <div className={styles.example}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Digite uma palavra"
          className={styles.input}
          maxLength={7}
        />
        <button onClick={startPermutation} className={styles.button}>
          Iniciar Permutação
        </button>

        {permutations.length > 0 && (
          <>
            <div className={styles.permutationDisplay}>
              {permutations[currentIndex]}
            </div>
            <div className={styles.permutationNum}>
              {currentIndex + 1} / {permutations.length}
            </div>
          </>
        )}
        <div className={styles.controls}>
          <span className={styles.speedDisplay}>Velocidade: {speed}ms</span>
          <button onClick={decreaseSpeed} className={styles.controlButton}>
            -
          </button>
          <button onClick={increaseSpeed} className={styles.controlButton}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermutationAnimation;
