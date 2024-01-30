import JunkFood from "../assets/fs-junkfood-hquiz.png";
import HealthyFood from "../assets/fs-vegetables-hquiz.png";
import TvAfar from "../assets/fs-tvafar-hquiz.png";
import TvNear from "../assets/fs-tvnear-hquiz.png";
import ReadBookDark from "../assets/fs-darkroom-hquiz.png";
import RubEyes from "../assets/fs-eyerubbing-hquiz.png";
import Jogging from "../assets/fs-jogging-hquiz.jpg";
import PlayVidGame from "../assets/fs-playvideogame-hquiz.png";
import Salmon from "../assets/fs-salmon-hquiz.png";
import WashHand from "../assets/fs-washhand-hquiz.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HealthQuizReasoning from "../components/healthQuizReasoning";
import HealthQuizQuestion from "../components/healthQuizQuestion";
import HealthQuizSummaryTable from "../components/healthQuizSummaryTable";
import { Fade } from "@mui/material";
import "./healthQuiz.css";

export const content = [
  {
    imgSrc: TvAfar,
    habit: "Watching TV from afar",
    isHealthy: true,
    desc: "Watching TV from a far distance reduces eye strain, prevents fatigue, and protects our eyes from potential problems caused by sitting too close.",
  },
  {
    imgSrc: JunkFood,
    habit: "Eating hamburgers",
    isHealthy: false,
    desc: "Hamburgers have lots of fat and can make you gain weight. They're often cooked with oil and served with toppings that are high in fat and calories. Eating too many hamburgers can be bad for your health.",
  },
  {
    imgSrc: ReadBookDark,
    habit: "Reading in darkness",
    isHealthy: false,
    desc: "Reading in low light strains eyes, causing discomfort, headaches, and reduced focus. Well-lit conditions are advised to prevent issues.",
  },
  {
    imgSrc: Jogging,
    habit: "Jogging",
    isHealthy: true,
    desc: "Exercise and running promote overall cardiovascular health, which improves blood flow to the eyes, reducing the risk of age-related macular degeneration and other eye conditions. It also allows us to take a break from looking at screens especially in today's digital world.",
  },
  {
    imgSrc: WashHand,
    habit: "Handwashing",
    isHealthy: true,
    desc: "Hand washing prevents the spread of bacteria and viruses, reducing the risk of eye infections when touching eyes or face. Numerous prevalent eye diseases are contagious and can easily spread from one person to another.",
  },
  {
    imgSrc: RubEyes,
    habit: "Rubbing eyes",
    isHealthy: false,
    desc: "Rubbing your eyes can introduce dirt, bacteria, or irritants, leading to infections or damage. It may also increase eye pressure. Hence, it is good to avoid rubbing your eyes.",
  },
  {
    imgSrc: Salmon,
    habit: "Consuming salmon",
    isHealthy: true,
    desc: "Salmon is rich in omega-3 fatty acids, particularly DHA, which supports retinal function, reduces inflammation, and may lower the risk of age-related macular degeneration, enhancing overall eye health.",
  },
  {
    imgSrc: PlayVidGame,
    habit: "Playing video games",
    isHealthy: false,
    desc: "Extended screen time in video games can cause eye strain, dryness, and discomfort due to prolonged focus, screen glare, and reduced blinking. Taking breaks is important especially for children who are still growing up.",
  },
  {
    imgSrc: HealthyFood,
    habit: "Eating fruits and vegetables",
    isHealthy: true,
    desc: "Vegetables and fruits are healthy because they contain important vitamins, minerals, and fiber that help our bodies grow, stay strong, and work properly. They can make us feel energized, help our immune system, and keep our bodies working well.",
  },
  {
    imgSrc: TvNear,
    habit: "Watching TV too close",
    isHealthy: false,
    desc: "Watching TV too close to the screen can strain our eyes and make them tired. It can also lead to eye discomfort, headaches, and blurry vision. Sitting farther away helps our eyes relax, preventing eye problems and ensuring healthier screen viewing.",
  },
];

const HealthQuiz = () => {
  const navigate = useNavigate();

  const getShuffledContent = () => {
    const shuffledContent = content.sort((a, b) => 0.5 - Math.random());
    return shuffledContent.map((item) => ({
      ...item,
      isCorrect: null,
    }));
  };

  const [score, setScore] = useState(0);
  const [isShowingQuestion, setIsShowingQuestion] = useState(true);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [prevCorrect, setPrevCorrect] = useState(false);
  const [showImgFadeAnimation, setShowImgFadeAnimation] = useState(false);
  const [shuffledContent, setShuffledContent] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    setShowImgFadeAnimation(false);
    setShowImgFadeAnimation(true);
  }, [currentContentIndex]);

  useEffect(() => {
    setShuffledContent(getShuffledContent());
  }, []);

  if (!shuffledContent) return <></>;
  if (gameEnded)
    return <HealthQuizSummaryTable shuffledContent={shuffledContent} />;
  return (
    <div>
      <div className="health-quiz-score-container">
        <p className="health-quiz-score-label">Current score:</p>
        <p className="health-quiz-score">{score}</p>
      </div>

      <div className="health-quiz">
        <div className="img-game-prompt-splitter">
          <Fade in={showImgFadeAnimation} timeout={1000}>
            <img
              src={shuffledContent[currentContentIndex].imgSrc}
              className="game-img"
            />
          </Fade>

          {isShowingQuestion ? (
            <HealthQuizQuestion
              isHealthy={shuffledContent[currentContentIndex].isHealthy}
              setScore={setScore}
              setIsShowingQuestion={setIsShowingQuestion}
              setPrevCorrect={setPrevCorrect}
              setShuffledContent={setShuffledContent}
              currentContentIndex={currentContentIndex}
            />
          ) : (
            <HealthQuizReasoning
              desc={shuffledContent[currentContentIndex].desc}
              currentContentIndex={currentContentIndex}
              setIsShowingQuestion={setIsShowingQuestion}
              setCurrentContentIndex={setCurrentContentIndex}
              setGameEnded={setGameEnded}
              contentLength={shuffledContent.length}
              prevCorrect={prevCorrect}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthQuiz;
