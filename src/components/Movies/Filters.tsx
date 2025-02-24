import SelectFilters from "./SelectFilters";

interface FiltersProps {
  onSortByChange: (sortbyValue: string) => void;
  onCountryChange: (countryValue: string) => void;
  selectedSortBy: string;
  selectedCountry: string;
}

const Filters: React.FC<FiltersProps> = ({
  onSortByChange,
  onCountryChange,
  selectedSortBy,
  selectedCountry,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 0",
        gap: "2vw",
      }}
    >
      <SelectFilters
        options={[
          "Popularity",
          "Popularity This Month",
          "Popularity This Year",
        ]}
        label="Sort by : "
        onChange={onSortByChange}
        value={selectedSortBy}
      />
      <SelectFilters
        options={["All", "US", "FR", "GB"]}
        label="Country : "
        onChange={onCountryChange}
        value={selectedCountry}
      />
    </div>
  );
};

export default Filters;
