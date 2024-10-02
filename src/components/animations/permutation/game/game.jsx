import { useState, useEffect, useRef } from "react";
import { words, calculatePermutations, shuffleArray } from "./gameUtils";
import styles from "./game.module.css";
import { getAuth, setPoints } from "@/lib/data";

const Game = () => {
  const [user, setUser] = useState(null);
  const [word, setWord] = useState("");
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [timer, setTimer] = useState(60);
  const [progress, setProgress] = useState(100);
  const [points, setPointsState] = useState(0);
  const [round, setRound] = useState(0);
  const [roundResults, setRoundResults] = useState([]);
  const [showBonus, setShowBonus] = useState(false);

  const maxRounds = 5;
  const intervalId = useRef(null);

  const calculateBonus = (correctAnswers) => {
    if (correctAnswers === 5) return 100;
    if (correctAnswers === 4) return 50;
    if (correctAnswers === 3) return 20;
    if (correctAnswers === 2) return 10;
    if (correctAnswers === 1) return 0;
    return -30;
  };

  useEffect(() => {
    getAuth().then((data) => setUser(data));
  }, []);

  const generateWrongOptions = (correctPermutations, word) => {
    if (correctPermutations < 120) {
      const wrongOption1 =
        correctPermutations + Math.floor(Math.random() * 10 + 1);
      const wrongOption2 =
        correctPermutations - Math.floor(Math.random() * 5 + 1);
      const wrongOption3 =
        correctPermutations + Math.floor(Math.random() * 20 + 5);
      return [wrongOption1, wrongOption2, wrongOption3];
    } else {
      const wrongOption1 =
        Math.round(
          (correctPermutations + Math.floor(Math.random() * 100 + 1)) / 10
        ) * 10;
      const wrongOption2 =
        Math.round(
          (correctPermutations - Math.floor(Math.random() * 50 + 1)) / 10
        ) * 10;
      const wrongOption3 =
        Math.round(
          (correctPermutations + Math.floor(Math.random() * 200 + 50)) / 10
        ) * 10;
      return [wrongOption1, wrongOption2, wrongOption3];
    }
  };

  const startNewRound = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);

    const correctPermutations = calculatePermutations(randomWord);
    const wrongOptions = generateWrongOptions(correctPermutations);

    const shuffledOptions = shuffleArray([
      correctPermutations,
      ...wrongOptions,
    ]);

    setOptions(shuffledOptions);
    setCorrectOption(correctPermutations);
    setProgress(100);
    setTimer(60);
    setSelectedOption(null);
    setFeedback("");

    intervalId.current = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          const newTime = prev - 1;
          const newProgress = (newTime / 60) * 100;
          setProgress(newProgress);
          return newTime;
        } else {
          handleTimeout();
          return 0;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    if (round < maxRounds) {
      startNewRound();
    } else {
      setShowBonus(true);
      clearInterval(intervalId.current);
    }
  }, [round]);

  const handleOptionClick = (option) => {
    clearInterval(intervalId.current);
    setSelectedOption(option);
    if (option === correctOption) {
      setFeedback("Correto! Parabéns.");
      setRoundResults((prevResults) => [...prevResults, true]);
      setPointsState((prevPoints) => prevPoints + 100);
    } else {
      setFeedback("Errado! Tente novamente.");
      setRoundResults((prevResults) => [...prevResults, false]);
      setPointsState((prevPoints) => prevPoints - 35);
    }

    setTimeout(() => {
      if (round < maxRounds - 1) {
        setRound((prevRound) => prevRound + 1);
      } else {
        setShowBonus(true);
      }
    }, 2000);
  };

  const handleTimeout = () => {
    clearInterval(intervalId.current);
    setFeedback("Tempo esgotado! Resposta computada como errada.");
    setRoundResults((prevResults) => [...prevResults, false]);
    setPointsState((prevPoints) => prevPoints - 35);

    setTimeout(() => {
      if (round < maxRounds - 1) {
        setRound((prevRound) => prevRound + 1);
      } else {
        setShowBonus(true);
      }
    }, 500);
  };

  const handleEndGame = () => {
    const correctAnswers = roundResults.filter(
      (result) => result === true
    ).length;
    const bonus = calculateBonus(correctAnswers);
    const finalPoints = points + bonus;
    setPoints(user.id, finalPoints);

    window.location.href = "/practice";
  };

  // Função para reiniciar o jogo
  const handleRestartGame = () => {
    setRound(0);
    setRoundResults([]);
    setPointsState(0);
    setShowBonus(false);
    startNewRound();
  };

  if (user === null) {
    return <p>Loading...</p>;
  }

  if (showBonus) {
    const correctAnswers = roundResults.filter(
      (result) => result === true
    ).length;
    const bonus = calculateBonus(correctAnswers);

    return (
      <div className={styles.bonusContainer}>
        <h2>Você completou o jogo!</h2>
        <p>
          Respostas corretas: {correctAnswers}/{maxRounds}
        </p>
        <p>Bônus: {bonus} pontos</p>
        <p>Pontuação total: {points + bonus}</p>
        <button onClick={handleEndGame} className={styles.endGameButton}>
          Encerrar Jogo
        </button>
        <button onClick={handleRestartGame} className={styles.restartButton}>
          Reiniciar Jogo
        </button>
      </div>
    );
  }

  // Renderizar o jogo
  return (
    <div className={styles.gameContainer}>
      <div className={styles.roundIndicators}>
        {Array.from({ length: maxRounds }).map((_, index) => (
          <div
            key={index}
            className={`${styles.roundIndicator} ${
              roundResults[index] === true
                ? styles.correctRound
                : roundResults[index] === false
                ? styles.wrongRound
                : ""
            }`}
          />
        ))}
      </div>
      <h2>Quantas permutações existem para a palavra "{word}"?</h2>
      <div
        className={styles.timerBar}
        style={{
          width: `${progress}%`,
          backgroundColor: `rgb(${255 - progress * 2.55}, ${
            progress * 2.55
          }, 0)`,
        }}
      ></div>
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={styles.optionButton}
            disabled={selectedOption !== null || timer === 0}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && <p>{feedback}</p>}
    </div>
  );
};

export default Game;
