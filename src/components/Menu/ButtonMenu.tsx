import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonMenuProps {
  label: string;
  page: string;
  isActive: boolean;
  isMobile: boolean;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  label,
  page,
  isActive,
  isMobile,
}) => {
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
          fontSize: isMobile ? "6vw" : "0.8vw",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "bold",

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
