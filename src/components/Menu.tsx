import React from "react";
import { useLocation } from "react-router-dom";
import ButtonMenu from "./Menu/ButtonMenu";
const Menu = () => {
  const location = useLocation();
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "5%",
        zIndex: "10",
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
      }}
    >
      <div
        style={{
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "1.5vw",
          }}
        >
          TITREINSNAE
        </h1>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <ButtonMenu
          label="New Movies"
          page="/"
          isActive={location.pathname === "/"}
        />
        <ButtonMenu
          label="Movies"
          page="movie"
          isActive={location.pathname === "/movie"}
        />
      </div>
    </div>
  );
};

export default Menu;
