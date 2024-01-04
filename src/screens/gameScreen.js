import "./gameScreen.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "@mui/material";

//props: gameTitle, children
const GameScreen = (props) => {
  const navigate = useNavigate();

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      <Fade in={fadeIn} timeout={1000}>
        <p className="game-title">{props.gameTitle}</p>
      </Fade>
      <div className="flex-container">
        <div className="game-container">{props.children}</div>
      </div>
      <Fade in={fadeIn} timeout={1000}>
        <p className="explore-other-text" onClick={() => navigate("/")}>
          Explore other games &gt;
        </p>
      </Fade>
    </div>
  );
};

export default GameScreen;
