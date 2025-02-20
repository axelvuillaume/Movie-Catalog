import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../types";

interface InfoMovieHomeProps {
  movie: Movie;
}
const InfoMovieHome: React.FC<InfoMovieHomeProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="infoFilmHome">
      <div
        style={{
          fontSize: "3.5vw",
          color: "white",
        }}
      >
        {movie.title}
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
            backgroundColor: isHovered ? "gray" : "white",
            color: isHovered ? "white" : "black",
            borderRadius: "5px",
            padding: "1.8% 1.5%",
            fontSize: "1vw",
            cursor: "pointer",
            marginTop: "3vh",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onClick={handleMoreInfoClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default InfoMovieHome;
