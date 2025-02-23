import React, { useEffect, useState } from "react";
import Carousel from "../components/Home/Carousel";
import CarouselMobile from "../components/Home/CarouselMobile";
import InfoMovieHome from "../components/Home/InfoMovieHome";
import useWindowSize from "../hooks/useWindowsSize";
import { fetchMovieNowPlaying } from "../services/moviesService";
import { Movie } from "../types/Movies";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const isMobile = useWindowSize();

  const changeBackground = (backdropPath: string) => {
    setBackgroundImage(`https://image.tmdb.org/t/p/original${backdropPath}`);
  };

  const selectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovieNowPlaying();

        if (moviesData.results) {
          setMovies(moviesData.results);

          if (moviesData.results.length > 0) {
            const firstMovie = moviesData.results[0];
            setSelectedMovie(firstMovie);
            changeBackground(
              isMobile ? firstMovie.poster_path : firstMovie.backdrop_path || ""
            );
          }
        } else {
          console.error("moviesData.results est undefined !");
        }
      } catch (error) {
        console.error("Erreur lors du chargement des films :", error);
      }
    };

    loadMovies();
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
          width: isMobile ? "70%" : "30%",
          position: "absolute",
          top: isMobile ? "20%" : "18%",
          left: isMobile ? "15%" : "5%",
        }}
      >
        {selectedMovie && <InfoMovieHome movie={selectedMovie} />}
      </div>

      {isMobile ? (
        <CarouselMobile
          movies={movies}
          onMovieClick={selectMovie}
          onMovieClickBackGround={changeBackground}
        />
      ) : (
        <Carousel
          movies={movies}
          onMovieClick={selectMovie}
          onMovieClickBackGround={changeBackground}
        />
      )}
    </div>
  );
};

export default Home;
