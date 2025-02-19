interface SelectFiltersProps {
  options: string[];
  label: string;
  onChange: (value: string) => void;
}

const SelectFilters: React.FC<SelectFiltersProps> = ({
  options,
  label,
  onChange,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <p>{label}</p>
      <select
        onChange={(e) => onChange(e.target.value)}
        style={{
          border: "none",
          backgroundColor: "transparent",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
          outline: "none",
          borderRadius: "0px",
        }}
      >
        {options.map((option) => (
          <option key={option} style={{ color: "black" }}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilters;
