import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonMenuProps {
  label: string;
  page: string;
  isActive: boolean;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ label, page, isActive }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate(page);
  };

  return (
    <div style={{ margin: " 0 20px", display: "flex" }}>
      <button
        style={{
          all: "unset",
          color: isHovered ? "lightgray" : "white",
          fontSize: "0.8vw",
          fontFamily: "Arial Greek",
          cursor: "pointer",

          textDecoration: isActive ? "underline" : "none",
        }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonMenu;
