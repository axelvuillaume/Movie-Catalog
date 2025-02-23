import PhotoUnknown from "../../../images/Unknown_person.jpg";
import { CastMember } from "../../../types/Cast";

interface DistributionCardProps {
  actor: CastMember;
}

const DistributionCard: React.FC<DistributionCardProps> = ({ actor }) => {
  return (
    <div
      key={actor.id}
      style={{
        textAlign: "center",
        boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.3)",
        backgroundColor: "rgba(45, 42, 42, 0.3)",
        borderRadius: "10px",
        padding: "5px",
      }}
    >
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : `${PhotoUnknown}`
        }
        alt={actor.name}
        style={{
          borderRadius: "10px",
          width: "7vw",
        }}
      />
      <p style={{ color: "white" }}>{actor.name}</p>
      <p style={{ fontSize: "12px", color: "gray" }}>{actor.character}</p>
    </div>
  );
};

export default DistributionCard;
