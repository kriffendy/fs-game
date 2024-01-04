import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainMenu from "./screens/mainMenu";
import HealthQuiz from "./screens/healthQuiz";
import TextClassificationGame from "./screens/textClassification";
import HealthClassificationGame from "./screens/healthClassification";
import GameScreen from "./screens/gameScreen";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<MainMenu />} />
        <Route
          path="/textClassification"
          element={
            <GameScreen gameTitle="Text Classification Memory Game">
              <TextClassificationGame />
            </GameScreen>
          }
        />

        <Route
          path="/healthClassification"
          element={<HealthClassificationGame />}
        />
        <Route
          path="/healthQuiz"
          element={
            <GameScreen gameTitle="Healthy Habits Game Classification">
              <HealthQuiz />
            </GameScreen>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
