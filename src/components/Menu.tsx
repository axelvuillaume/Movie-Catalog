import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowsSize";
import ButtonMenu from "./Menu/ButtonMenu";
import Search from "./Search";
const MenuIcon = FiMenu as unknown as React.FC;
const CloseIcon = FiX as unknown as React.FC;
const Menu = () => {
  const location = useLocation();
  const isMobile = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      style={{
        position: isMobile ? "sticky" : "absolute",
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
      <div style={{ color: "white" }}>
        <h1 style={{ fontSize: isMobile ? "6vw" : "1.3vw" }}>TITREINSNAE</h1>
      </div>
      {!isMobile ? (
        <>
          <Search onClick={() => {}} />
          <div style={{ display: "flex", gap: "6vw" }}>
            <ButtonMenu
              label="New Movies"
              page="/"
              isActive={location.pathname === "/"}
              onClick={() => {}}
            />
            <ButtonMenu
              label="Movies"
              page="/movie"
              isActive={location.pathname === "/movie"}
              onClick={() => {}}
            />
          </div>
        </>
      ) : (
        <div
          style={{
            cursor: "pointer",
            color: "white",
            fontSize: "6vw",
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      )}

      {isMobile && isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "rgba(128, 128, 128, 0.9)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            justifyContent: "space-evenly",
          }}
        >
          <Search onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <ButtonMenu
            label="New Movies"
            page="/"
            isActive={location.pathname === "/"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <ButtonMenu
            label="Movies"
            page="/movie"
            isActive={location.pathname === "/movie"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
