import MenuButton from "../components/menuButton";

const MainMenu = () => {
  return (
    <div className="mainMenuPageContainer">
      <p style={{ fontSize: "30px", fontWeight: "700" }}>Classification Game</p>
      <div className="mainMenuCenter">
        <MenuButton
          text="Play text classification"
          navigationPath="/textClassification"
        />
        <MenuButton
          text="Play health classification"
          navigationPath="/healthClassification"
        />
        <MenuButton text="Play health quiz" navigationPath="/healthQuiz" />
      </div>
    </div>
  );
};

export default MainMenu;
