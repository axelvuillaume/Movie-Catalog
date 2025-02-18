import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import InfoMovieHome from "../components/InfoMovieHome";
import { Movie } from "../types";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  const changeBackground = (backdropPath: string) => {
    setBackgroundImage(`https://image.tmdb.org/t/p/original${backdropPath}`);
  };

  const selectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5NTZkMjQ1MjkwYzU5MTljNmUxMjFlMjMwMzU2ZiIsIm5iZiI6MTczOTg4NDg4Ny4yMzUwMDAxLCJzdWIiOiI2N2I0ODk1NzVkYzk4OGIxYmI5ZmNiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.38PUZIT9Z-ybX4JPzH-lFLA70DwSBVNcFxvxncRiGiw`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, 
        rgba(0, 0, 0, 1) 0%, 
        rgba(0, 0, 0, 0.85) 30%, 
        rgba(0, 0, 0, 0.6) 50%, 
        rgba(0, 0, 0, 0) 90%
      ), url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        position: "relative",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div
        style={{
          width: "30%",
          position: "absolute",
          top: "20%",
          left: "5%",
        }}
      >
        {selectedMovie && <InfoMovieHome movie={selectedMovie} />}
      </div>

      <Carousel
        movies={movies}
        onMovieClick={selectMovie}
        onMovieClickBackGround={changeBackground}
      />
    </div>
  );
};

export default Home;
