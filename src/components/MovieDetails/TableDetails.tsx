import { Movie } from "../../types";

interface TableDetailsProps {
  movie: Movie;
}

const TableDetails: React.FC<TableDetailsProps> = ({ movie }) => {
  return (
    <table
      style={{
        borderCollapse: "collapse",
        color: "white",
        width: "fit-content",
        fontSize: "1em",
        marginTop: "6vh",
      }}
    >
      <tbody>
        <tr>
          <td style={{ border: "0.5px solid white", padding: "10px" }}>
            <strong>Release Date</strong>
          </td>
          <td style={{ border: "0.5px solid white", padding: "10px" }}>
            {movie.release_date}
          </td>
        </tr>
        <tr>
          <td style={{ border: "0.5px solid white", padding: "10px" }}>
            <strong>Vote Average</strong>
          </td>
          <td style={{ border: "0.5px solid white", padding: "10px" }}>
            {movie.vote_average}
          </td>
        </tr>
        <tr>
          <td style={{ border: "0.5px solid white", padding: "10px" }}>
            <strong>Budget</strong>
          </td>
          <td style={{ border: "0.5px solid white", padding: "10px" }}>
            {movie.budget > 0 ? movie.budget.toLocaleString() + "$" : "Unknown"}
          </td>
        </tr>
        <tr>
          <td style={{ border: "0.5px solid white", padding: "10px" }}>
            <strong>Production Companies</strong>
          </td>
          <td style={{ border: "0.5px solid white", padding: "10px" }}>
            {movie.production_companies.map((company) => (
              <div key={company.id}>{company.name}</div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableDetails;
