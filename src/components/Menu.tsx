import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowsSize";
import logo from "../images/logo2.png";
import ButtonMenu from "./Menu/ButtonMenu";
import Search from "./Menu/Search";
const MenuIcon = FiMenu as unknown as React.FC;
const CloseIcon = FiX as unknown as React.FC;
const Menu = () => {
  const location = useLocation();
  const isMobile = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        <div
          style={{ display: " flex", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img
            style={{ width: isMobile ? "30vw" : "8vw" }}
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
      {!isMobile ? (
        <>
          <Search onClick={() => {}} />
          <div style={{ display: "flex" }}>
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
