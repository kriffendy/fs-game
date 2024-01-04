import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./textClassification.css";
import "../components/gameButton.css";

const words = [
  "Fever",
  "Cough",
  "Headache",
  "Fatigue",
  "Nausea",
  "Sore throat",
  "Shortness of breath",
  "Dizziness",
  "Insomnia",
  "Stress",
  "Anxiety",
  "Depression",
  "Hydration",
  "Exercise",
  "Nutrition",
  "Sleep",
  "Handwashing",
  "Vaccination",
  "Stretching",
  "Meditation",
  "Walking",
  "Fresh air",
  "Sunlight",
  "Balanced diet",
  "Healthy snacks",
  "Regular check-ups",
  "Staying active",
  "Proper hygiene",
  "Mindfulness",
  "Positive mindset",
];

const gameButtonOptions = ["BACK TO MAIN", "RESTART", "START", "SEEN", "NEW"];

const TextClassificationGame = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [storedWordsSet, setStoredWordsSet] = useState(new Set());
  const [currentWordObj, setCurrentWordObj] = useState(null);
  const [timer, setTimer] = useState(20);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let countdown;

    if (isTimerActive) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [isTimerActive]);

  useEffect(() => {
    if (timer === 0) {
      restart();
    }
  }, [timer]);

  const handleStartTimer = () => {
    setTimer(20);
    setIsTimerActive(true);
  };

  const addWordToSet = (index) => {
    if (!storedWordsSet.has(index)) {
      const newSet = new Set(storedWordsSet);
      newSet.add(index);
      setStoredWordsSet(newSet);
    }
  };

  const getNewWordInstance = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWordObj({ index: randomIndex, word: words[randomIndex] });
  };

  const restart = () => {
    setScore(0);
    setStoredWordsSet(new Set());
    setCurrentWordObj(null);
  };
  const GameButton = (props) => {
    return (
      <button
        onClick={() => {
          //if button option = "BACK TO MAIN"
          if (props.gameButtonIndex == 0) navigate("/");
          //if button option = "RESTART"
          else if (props.gameButtonIndex == 1) restart();
          //if button option = "START"
          else if (props.gameButtonIndex == 2) {
            //TODO: add start timer
            handleStartTimer();
            getNewWordInstance();
          }
          //if button option = "SEEN"
          else if (props.gameButtonIndex == 3) {
            console.log(storedWordsSet);
            if (storedWordsSet.has(currentWordObj.index)) setScore(score + 1);
            addWordToSet(currentWordObj.index);
            getNewWordInstance();
          }
          //if button option = "NEW"
          else if (props.gameButtonIndex == 4) {
            if (storedWordsSet.has(currentWordObj.index) == false)
              setScore(score + 1);
            addWordToSet(currentWordObj.index);
            getNewWordInstance();
          }
        }}
        className="game-button"
      >
        {gameButtonOptions[props.gameButtonIndex]}
      </button>
    );
  };

  return (
    <div>
      <div className="text-classification-game-container">
        <p className="text-classification-title">Text classification</p>
        <p className="text-game-score-title">Current score:</p>
        <p className="text-game-score">{score}</p>
        {currentWordObj ? (
          <>
            <p className="text-game-timer">
              Time left: <p style={{ color: "red" }}>{timer}s</p>
            </p>
            <p className="text-game-prompt">Displayed word:</p>
            <p className="text-game-current-word">{currentWordObj.word}</p>
            <div
              style={{
                width: "900px",
                marginTop: "40px",
                marginBottom: "30px",
              }}
            >
              <div className="flex-container">
                <GameButton gameButtonIndex={1} />
                <GameButton gameButtonIndex={3} />
                <GameButton gameButtonIndex={4} />
              </div>
            </div>
            <GameButton gameButtonIndex={0} />
          </>
        ) : (
          <div style={{ width: "600px" }}>
            <div className="flex-container">
              <GameButton gameButtonIndex={0} />
              <GameButton gameButtonIndex={2} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextClassificationGame;
