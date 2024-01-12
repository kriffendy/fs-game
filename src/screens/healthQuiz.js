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
import { Fade } from "@mui/material";
import "./healthQuiz.css";

const content = [
  {
    imgSrc: TvAfar,
    isHealthy: true,
    desc: "Watching TV from a far distance reduces eye strain, prevents fatigue, and protects our eyes from potential problems caused by sitting too close.",
  },
  {
    imgSrc: JunkFood,
    isHealthy: false,
    desc: "Hamburgers have lots of fat and can make you gain weight. They're often cooked with oil and served with toppings that are high in fat and calories. Eating too many hamburgers can be bad for your health.",
  },
  {
    imgSrc: ReadBookDark,
    isHealthy: false,
    desc: "Reading in low light strains eyes, causing discomfort, headaches, and reduced focus. Well-lit conditions are advised to prevent issues.",
  },
  {
    imgSrc: Jogging,
    isHealthy: true,
    desc: "Exercise and running promote overall cardiovascular health, which improves blood flow to the eyes, reducing the risk of age-related macular degeneration and other eye conditions. It also allows us to take a break from looking at screens especially in today's digital world.",
  },
  {
    imgSrc: WashHand,
    isHealthy: true,
    desc: "Hand washing prevents the spread of bacteria and viruses, reducing the risk of eye infections when touching eyes or face. Numerous prevalent eye diseases are contagious and can easily spread from one person to another.",
  },
  {
    imgSrc: RubEyes,
    isHealthy: false,
    desc: "Rubbing your eyes can introduce dirt, bacteria, or irritants, leading to infections or damage. It may also increase eye pressure. Hence, it is good to avoid rubbing your eyes.",
  },
  {
    imgSrc: Salmon,
    isHealthy: true,
    desc: "Salmon is rich in omega-3 fatty acids, particularly DHA, which supports retinal function, reduces inflammation, and may lower the risk of age-related macular degeneration, enhancing overall eye health.",
  },
  {
    imgSrc: PlayVidGame,
    isHealthy: false,
    desc: "Extended screen time in video games can cause eye strain, dryness, and discomfort due to prolonged focus, screen glare, and reduced blinking. Taking breaks is important especially for children who are still growing up.",
  },
  {
    imgSrc: HealthyFood,
    isHealthy: true,
    desc: "Vegetables and fruits are healthy because they contain important vitamins, minerals, and fiber that help our bodies grow, stay strong, and work properly. They can make us feel energized, help our immune system, and keep our bodies working well.",
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
  const [prevCorrect, setPrevCorrect] = useState(false);
  const [showImgFadeAnimation, setShowImgFadeAnimation] = useState(false);

  useEffect(() => {
    setShowImgFadeAnimation(false);
    setShowImgFadeAnimation(true);
  }, [currentContentIndex]);

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
              src={content[currentContentIndex].imgSrc}
              className="game-img"
            />
          </Fade>
          {isShowingQuestion ? (
            <HealthQuizQuestion
              isHealthy={content[currentContentIndex].isHealthy}
              setScore={setScore}
              setIsShowingQuestion={setIsShowingQuestion}
              setPrevCorrect={setPrevCorrect}
            />
          ) : (
            <HealthQuizReasoning
              desc={content[currentContentIndex].desc}
              currentContentIndex={currentContentIndex}
              setIsShowingQuestion={setIsShowingQuestion}
              setCurrentContentIndex={setCurrentContentIndex}
              contentLength={content.length}
              prevCorrect={prevCorrect}
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
