import { useNavigate } from "react-router-dom";
import { Movie } from "../../types";

import React, { useState } from "react";

interface CardProps {
  movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMoreInfoClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      key={movie.id}
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
      onClick={handleMoreInfoClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          padding: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "5px",
          }}
        >
          {movie.title}
        </h2>
        <p
          className="movie-rating"
          style={{
            color: "#f5c518",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          IMDb: {movie.vote_average}
        </p>
      </div>
    </div>
  );
};

export default Card;
