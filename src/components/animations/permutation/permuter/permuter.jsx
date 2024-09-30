import { useState, useEffect, useRef } from "react";
import styles from "./permuter.module.css";

const Permuter = () => {
  const [word, setWord] = useState("");
  const [permutations, setPermutations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(2500);
  const [letterColors, setLetterColors] = useState({});
  const [isPermutating, setIsPermutating] = useState(false);
  const letterRefs = useRef([]);
  const positions = useRef([]);

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
    setIsPermutating(true);
  };

  const resetPermutation = () => {
    setIsPermutating(false);
    setWord("");
    setPermutations([]);
    setCurrentIndex(0);
  };

  const increaseSpeed = () => {
    setSpeed((prevSpeed) => Math.max(100, prevSpeed - 100));
  };

  const decreaseSpeed = () => {
    setSpeed((prevSpeed) => Math.min(5000, prevSpeed + 100));
  };

  useEffect(() => {
    const defineFixedPositions = () => {
      const baseX = 50;
      const baseY = -18;
      const newPositions = [];

      for (let i = 0; i < word.length; i++) {
        newPositions.push({
          x: i * baseX - baseX * (word.length / 2),
          y: baseY,
        });
      }

      positions.current = newPositions;
    };

    const assignColors = () => {
      const uniqueLetters = [...new Set(word.split(""))];
      const colors = {};
      uniqueLetters.forEach((letter, index) => {
        colors[letter] = `hsl(${
          (index * 360) / uniqueLetters.length
        }, 70%, 60%)`;
      });
      setLetterColors(colors);
    };

    if (word.length > 0) {
      assignColors();
      defineFixedPositions();
    }
  }, [word]);

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

  useEffect(() => {
    if (letterRefs.current.length > 0 && currentIndex > 0) {
      const currentWord = permutations[currentIndex];
      const prevWord = permutations[currentIndex - 1];

      const usedRefs = new Set();

      currentWord.split("").forEach((letter, index) => {
        const letterDiv = letterRefs.current[index];

        let prevIndex = -1;
        for (let i = 0; i < prevWord.length; i++) {
          if (prevWord[i] === letter && !usedRefs.has(i)) {
            prevIndex = i;
            usedRefs.add(i);
            break;
          }
        }

        if (
          prevIndex !== index &&
          positions.current[prevIndex] &&
          positions.current[index]
        ) {
          const prevPosition = positions.current[prevIndex];
          const currentPosition = positions.current[index];

          const deltaX = prevPosition.x - currentPosition.x;
          const deltaY = prevPosition.y - currentPosition.y;

          letterDiv.style.transition = "none";
          letterDiv.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

          requestAnimationFrame(() => {
            letterDiv.style.transition = `transform ${speed}ms cubic-bezier(0.25, 1, 0.5, 1)`;
            letterDiv.style.transform = `translate(0px, 0px)`;
          });
        }
      });
    }
  }, [currentIndex, permutations, speed]);

  const getLetters = () => {
    const currentWord = permutations[currentIndex] || word;

    return currentWord.split("").map((letter, index) => {
      const key = letter + index;
      return (
        <div
          key={key}
          ref={(el) => (letterRefs.current[index] = el)}
          className={styles.letter}
          style={{
            backgroundColor: letterColors[letter],
            position: "absolute",
            left: `${positions.current[index]?.x}px` || "0px",
            top: `${positions.current[index]?.y}px` || "0px",
          }}
        >
          {letter}
        </div>
      );
    });
  };

  return (
    <div className={styles.exampleBox}>
      <div className={`${styles.inputContainer}`}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Insira seu conjunto"
          className={`${styles.input} ${isPermutating ? styles.hidden : ""}`}
          maxLength={7}
        />

        <button
          onClick={isPermutating ? resetPermutation : startPermutation}
          className={`${styles.button} ${isPermutating ? styles.restart : ""}`}
          disabled={word === "" && !isPermutating}
        >
          {isPermutating ? "↻" : "►"}
        </button>
      </div>

      {permutations.length > 0 && (
        <div className={`${styles.displayContainer} ${styles.fadeIn}`}>
          <div className={styles.permutationDisplay}>{getLetters()}</div>
          <div className={styles.permutationNum}>
            {currentIndex + 1} / {permutations.length}
          </div>
        </div>
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

export default Permuter;
