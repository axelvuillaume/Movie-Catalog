import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../types";

const MovieDetails: React.FC = () => {
  const { id } = useParams(); // Récupère l'ID du film depuis l'URL
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`, // Pas de clé API ici
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5NTZkMjQ1MjkwYzU5MTljNmUxMjFlMjMwMzU2ZiIsIm5iZiI6MTczOTg4NDg4Ny4yMzUwMDAxLCJzdWIiOiI2N2I0ODk1NzVkYzk4OGIxYmI5ZmNiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.38PUZIT9Z-ybX4JPzH-lFLA70DwSBVNcFxvxncRiGiw`, // Votre token d'authentification
            },
          }
        );
        const data = await response.json();
        setMovie(data); // Mettre les détails du film dans le state
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]); // Recharger les données lorsque l'ID change

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ color: "black" }}>
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
