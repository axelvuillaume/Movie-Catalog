interface ButtonNavProps {
  label: string;
  onClick: () => void;
}

const ButtonNav: React.FC<ButtonNavProps> = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          padding: "8px 18px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {" "}
        {label}{" "}
      </button>
    </div>
  );
};

export default ButtonNav;
