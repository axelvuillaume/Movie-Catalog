import { useNavigate } from "react-router-dom";

interface ButtonMenuProps {
  label: string;
  page: string;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ label, page }) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(page);
  };

  return (
    <div style={{ margin: " 0 20px", display: "flex" }}>
      <button
        style={{
          all: "unset",
          color: "white",
          fontSize: "1em",
          fontFamily: "Arial Greek",
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonMenu;
