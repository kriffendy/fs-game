import { useNavigate } from "react-router-dom";
import GameButton from "./gameButton";
import { Fade } from "@mui/material";
import { useEffect, useState } from "react";

const HealthQuizReasoning = ({
  desc,
  setIsShowingQuestion,
  setCurrentContentIndex,
  currentContentIndex,
  contentLength,
}) => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowText(true);
    setShowButton(true);
  }, []);

  return (
    <div>
      <Fade in={showText} timeout={1000}>
        <p className="health-quiz-desc">{desc}</p>
      </Fade>
      {currentContentIndex < contentLength - 1 ? (
        <GameButton
          onClick={() => {
            setIsShowingQuestion(true);
            setCurrentContentIndex((current) => current + 1);
          }}
        >
          NEXT
        </GameButton>
      ) : (
        <GameButton
          onClick={() => {
            navigate("/");
          }}
        >
          The game has finished!
        </GameButton>
      )}
    </div>
  );
};

export default HealthQuizReasoning;
