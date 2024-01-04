import JunkFood from "../assets/fs-junkfood-hquiz.png";
import HealthyFood from "../assets/fs-vegetables-hquiz.png";
import TvAfar from "../assets/fs-tvafar-hquiz.png";
import TvNear from "../assets/fs-tvnear-hquiz.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HealthQuizReasoning from "../components/healthQuizReasoning";
import HealthQuizQuestion from "../components/healthQuizQuestion";
import { Fade } from "@mui/material";
import "./healthQuiz.css";

const content = [
  {
    imgSrc: JunkFood,
    isHealthy: false,
    desc: "Hamburgers have lots of fat and can make you gain weight. They're often cooked with oil and served with toppings that are high in fat and calories. Eating too many hamburgers can be bad for your health.",
  },
  {
    imgSrc: HealthyFood,
    isHealthy: true,
    desc: "Vegetables and fruits are healthy because they contain important vitamins, minerals, and fiber that help our bodies grow, stay strong, and work properly. They can make us feel energized, help our immune system, and keep our bodies working well.",
  },
  {
    imgSrc: TvAfar,
    isHealthy: true,
    desc: "Watching TV from a far distance reduces eye strain, prevents fatigue, and protects our eyes from potential problems caused by sitting too close.",
  },
  {
    imgSrc: TvNear,
    isHealthy: false,
    desc: "Watching TV too close to the screen can strain our eyes and make them tired. It can also lead to eye discomfort, headaches, and blurry vision. Sitting farther away helps our eyes relax, preventing eye problems and ensuring healthier screen viewing.",
  },
];

const HealthQuiz = () => {
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [isShowingQuestion, setIsShowingQuestion] = useState(true);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [showImgFadeAnimation, setShowImgFadeAnimation] = useState(false);

  useEffect(() => {
    setShowImgFadeAnimation(false);
    setShowImgFadeAnimation(true);
  }, [currentContentIndex]);

  return (
    <div>
      {/* <Fade in={showImgFadeAnimation} timeout={1000}>
        <p className="health-quiz-game-title">
          Healthy Habits Game classification
        </p>
      </Fade> */}
      {/* <div className="flex-container">
        <div className="horizontal-flex-container"> */}
      <p className="health-quiz-score">Score: {score}</p>
      <div className="flex-container">
        <div className="img-game-prompt-splitter">
          <Fade in={showImgFadeAnimation} timeout={1000}>
            <img
              src={content[currentContentIndex].imgSrc}
              className="game-img"
            />
          </Fade>
          {isShowingQuestion ? (
            <HealthQuizQuestion
              isHealthy={content[currentContentIndex].isHealthy}
              setScore={setScore}
              setIsShowingQuestion={setIsShowingQuestion}
            />
          ) : (
            <HealthQuizReasoning
              desc={content[currentContentIndex].desc}
              currentContentIndex={currentContentIndex}
              setIsShowingQuestion={setIsShowingQuestion}
              setCurrentContentIndex={setCurrentContentIndex}
              contentLength={content.length}
            />
          )}
        </div>
      </div>
      {/* </div>
      </div> */}
      {/* <Fade in={showImgFadeAnimation} timeout={1000}>
        <p className="explore-other-text" onClick={() => navigate("/")}>
          Explore other games &gt;
        </p>
      </Fade> */}
    </div>
  );
};

export default HealthQuiz;
