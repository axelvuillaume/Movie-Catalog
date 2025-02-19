import SelectFilters from "./SelectFilters";

interface FiltersProps {
  onSortByChange: (sortbyValue: string) => void;
  onCountryChange: (countryValue: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  onSortByChange,
  onCountryChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 0",
        gap: "60px",
      }}
    >
      <SelectFilters
        options={[
          "Popularity",
          "Popularity This Month",
          "Popularity This Year",
        ]}
        label="Sort by: "
        onChange={onSortByChange}
      />
      <SelectFilters
        options={["All", "US", "FR", "GB"]}
        label="Country: "
        onChange={onCountryChange}
      />
    </div>
  );
};

export default Filters;
