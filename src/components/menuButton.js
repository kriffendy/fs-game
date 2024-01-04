import "./menuButton.css";
import { useNavigate } from "react-router-dom";

const MenuButton = (props) => {
  const navigate = useNavigate();
  return (
    <button
      className="menuButton"
      onClick={() => navigate(props.navigationPath)}
    >
      {props.text}
    </button>
  );
};

export default MenuButton;
