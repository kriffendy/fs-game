import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainMenu from "./screens/mainMenu";
import HealthQuiz from "./screens/healthQuiz";
import TextClassificationGame from "./screens/textClassification";
import GameScreen from "./screens/gameScreen";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<MainMenu />} />
        <Route
          path="/textClassification"
          element={
            <GameScreen
              gameTitle="Text Classification Memory Game"
              gameDesc="A memory game where you decide whether a word has already been shown or not."
            >
              <TextClassificationGame />
            </GameScreen>
          }
        />

        <Route
          path="/healthQuiz"
          element={
            <GameScreen
              gameTitle="Healthy Habits Game Classification"
              gameDesc="A health-focused game where you decide whether habits depicted in images represent a healthy or unhealthy habit"
            >
              <HealthQuiz />
            </GameScreen>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
