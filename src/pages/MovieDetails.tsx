import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableDetails from "../components/MovieDetails/TableDetails";
import { Movie } from "../types";
const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5NTZkMjQ1MjkwYzU5MTljNmUxMjFlMjMwMzU2ZiIsIm5iZiI6MTczOTg4NDg4Ny4yMzUwMDAxLCJzdWIiOiI2N2I0ODk1NzVkYzk4OGIxYmI5ZmNiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.38PUZIT9Z-ybX4JPzH-lFLA70DwSBVNcFxvxncRiGiw`, // Votre token d'authentification
            },
          }
        );
        const data = await response.json();
        setMovie(data);

        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5NTZkMjQ1MjkwYzU5MTljNmUxMjFlMjMwMzU2ZiIsIm5iZiI6MTczOTg4NDg4Ny4yMzUwMDAxLCJzdWIiOiI2N2I0ODk1NzVkYzk4OGIxYmI5ZmNiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.38PUZIT9Z-ybX4JPzH-lFLA70DwSBVNcFxvxncRiGiw`, // Votre token d'authentification
            },
          }
        );
        const videoData = await videoResponse.json();
        const trailer = videoData.results.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backgroundBlendMode: "darken",
        }}
      ></div>
      <div
        style={{
          fontFamily: "'Quicksand', sans-serif, fontWeight: 400",
          color: "white",
          display: "flex",
          height: "90%",
          width: "100%",
          justifyContent: "space-around",
          top: "7vh",
          position: "absolute",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "3vh",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{
                width: "20vw",
              }}
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div
            style={{
              fontSize: "1vw",
              fontWeight: "bold",
              display: "flex",
              gap: "15%",
              marginTop: "8vh",
            }}
          >
            {movie.genres.slice(0, 3).map((genre) => (
              <div key={genre.id}>{genre.name}</div>
            ))}
          </div>
          <div
            style={{
              fontSize: "3.5vw",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            {movie.original_title}
          </div>
          <div style={{ fontSize: "0.7vw" }}>
            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min
          </div>
        </div>
        <div
          style={{
            fontSize: "1vw",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "3%",
            }}
          >
            STORYLINE
          </div>
          <div style={{ fontWeight: 300 }}>{movie.overview}</div>

          <TableDetails movie={movie} />

          <a
            href={`https://www.youtube.com/watch?v=${trailerKey}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "5vh",
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${trailerKey}/hqdefault.jpg`}
              alt="Bande-annonce"
              style={{
                width: "17vw",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
