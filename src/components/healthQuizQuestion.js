import { useState, useEffect } from "react";
import GameButton from "./gameButton";
import "../screens/healthQuiz.css";
import { Fade } from "@mui/material";

const HealthQuizQuestion = ({ setScore, setIsShowingQuestion, isHealthy }) => {
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    setShowQuestion(true);
  }, []);

  return (
    <div>
      <Fade in={showQuestion} timeout={1000}>
        <p className="health-quiz-question">
          Does the above image show a healthy or unhealthy habit?
        </p>
      </Fade>
      {/* <img src={props.imgSrc} /> */}
      <div className="game-button-flex-container">
        <GameButton
          onClick={() => {
            if (isHealthy) setScore((score) => score + 1);
            setIsShowingQuestion(false);
          }}
          style={{ backgroundColor: "green" }}
        >
          HEALTHY
        </GameButton>
        <GameButton
          onClick={() => {
            if (!isHealthy) setScore((score) => score + 1);
            setIsShowingQuestion(false);
          }}
          style={{ backgroundColor: "red" }}
        >
          UNHEALTHY
        </GameButton>
      </div>
    </div>
  );
};

export default HealthQuizQuestion;
