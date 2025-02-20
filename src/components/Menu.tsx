import React from "react";
import { useLocation } from "react-router-dom";
import ButtonMenu from "./Menu/ButtonMenu";
import Search from "./Search";
const Menu = () => {
  const location = useLocation();
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "rgba(128, 128, 128, 0.6)",
        top: "0",
        zIndex: "10",
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        gap: "15vw",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "1.3vw",
          }}
        >
          TITREINSNAE
        </h1>
      </div>
      <div>
        {" "}
        <Search />
      </div>
      <div
        style={{
          display: "flex",
          gap: "6vw",
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
