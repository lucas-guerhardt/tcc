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
          Permutação é a disposição ordenada de um conjunto de objetos. Por
          exemplo, as permutações da palavra ABC são: ABC, ACB, BAC, BCA, CAB e
          CBA.
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
