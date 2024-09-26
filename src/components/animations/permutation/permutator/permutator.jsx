import { useState, useEffect } from "react";
import styles from "./permutator.module.css";

const Permutator = () => {
  const [word, setWord] = useState("");
  const [permutations, setPermutations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(2500);

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

  const increaseSpeed = () => {
    setSpeed((prevSpeed) => Math.max(100, prevSpeed - 100));
  };

  const decreaseSpeed = () => {
    setSpeed((prevSpeed) => Math.min(5000, prevSpeed + 100));
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

  return (
    <div className={styles.exampleBox}>
      <h1 className={styles.exampleTitle}>Permutador</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Digite uma palavra"
        className={styles.input}
        maxLength={7}
      />
      <button
        onClick={startPermutation}
        className={styles.button}
        disabled={word === ""}
      >
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
  );
};

export default Permutator;
