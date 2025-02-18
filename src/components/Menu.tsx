import ButtonMenu from "./Menu/ButtonMenu";
const Menu = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "2%",
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
        <h1>TITREINSNAE</h1>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <ButtonMenu label="New Movie" />
        <ButtonMenu label="Movie" />
        <ButtonMenu label="TV Series" />
      </div>
    </div>
  );
};

export default Menu;
