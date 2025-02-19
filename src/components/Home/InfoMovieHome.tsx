import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../types";

interface InfoMovieHomeProps {
  movie: Movie;
}
const InfoMovieHome: React.FC<InfoMovieHomeProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="infoFilmHome">
      <div
        style={{
          fontSize: "4vw",
          color: "white",
        }}
      >
        {movie.original_title}
      </div>
      <div
        style={{
          fontSize: "1vw",
          color: "grey",
        }}
      >
        {movie.overview}
      </div>
      <div>
        <button
          style={{
            all: "unset",
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "12px 10px",
            fontSize: "1vw",
            cursor: "pointer",
          }}
          onClick={handleMoreInfoClick}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default InfoMovieHome;
