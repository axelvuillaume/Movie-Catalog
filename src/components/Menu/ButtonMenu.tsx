interface ButtonMenuProps {
  label: string;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ label }) => {
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
        {" "}
        {label}{" "}
      </button>
    </div>
  );
};

export default ButtonMenu;
