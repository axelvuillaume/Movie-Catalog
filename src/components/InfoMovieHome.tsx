import React from "react";
import { Movie } from "../types";

interface InfoMovieHomeProps {
  movie: Movie;
}
const InfoMovieHome: React.FC<InfoMovieHomeProps> = ({ movie }) => {
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
            padding: "9px 7px",
            cursor: "pointer",
          }}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default InfoMovieHome;
