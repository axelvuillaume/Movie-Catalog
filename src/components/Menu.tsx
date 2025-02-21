import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import ButtonMenu from "./Menu/ButtonMenu";
import Search from "./Search";
const MenuIcon = FiMenu as unknown as React.FC;
const CloseIcon = FiX as unknown as React.FC;
const Menu = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <h1 style={{ fontSize: "1.3vw" }}>TITREINSNAE</h1>
      </div>
      {!isMobile ? (
        <>
          <Search isMobile={isMobile} />
          <div style={{ display: "flex", gap: "6vw" }}>
            <ButtonMenu
              label="New Movies"
              page="/"
              isActive={location.pathname === "/"}
              isMobile={isMobile}
            />
            <ButtonMenu
              label="Movies"
              page="/movie"
              isActive={location.pathname === "/movie"}
              isMobile={isMobile}
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

      {/* Menu déroulant */}
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
          <Search isMobile={isMobile} />
          <ButtonMenu
            label="New Movies"
            page="/"
            isActive={location.pathname === "/"}
            isMobile={isMobile}
          />
          <ButtonMenu
            label="Movies"
            page="/movie"
            isActive={location.pathname === "/movie"}
            isMobile={isMobile}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
