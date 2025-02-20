import { MovieCredits } from "../../types";
import DistributionCard from "./Distribution/DistributionCard";
interface DistributionProps {
  credits: MovieCredits | null;
}

const Distribution: React.FC<DistributionProps> = ({ credits }) => {
  return (
    <div>
      {credits ? (
        <div style={{ padding: "0 5% 5% 5%" }}>
          <div
            style={{
              color: "white",
              fontFamily: "'Quicksand', sans-serif, fontWeight: 400",
              fontSize: "1vw",
              fontWeight: "bold",
              padding: "3vw",
            }}
          >
            Distribution :
          </div>
          <div
            style={{
              display: "flex",
              gap: "2vw",
              overflowX: "auto",
            }}
          >
            {credits.cast.map((actor) => (
              <DistributionCard actor={actor} />
            ))}
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default Distribution;
