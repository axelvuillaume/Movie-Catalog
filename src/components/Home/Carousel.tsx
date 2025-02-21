import React, { useState } from "react";
import arrowLeft from "../../images/arrowLeft.png";
import arrowRight from "../../images/arrowRight.png";
import { Movie } from "../../types";
import ArrowCarousel from "./Carousel/ArrowCarousel";

interface CarouselProps {
  movies: Movie[];
  onMovieClickBackGround: (backdropPath: string) => void;
  onMovieClick: (movie: Movie) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  movies,
  onMovieClick,
  onMovieClickBackGround,
}) => {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const handleNext = () => {
  //   setSelectedIndex((prev) => (prev + 1) % movies.length);
  //   onMovieClickBackGround(
  //     movies[(selectedIndex + 1) % movies.length].backdrop_path
  //   );
  //   onMovieClick(movies[(selectedIndex + 1) % movies.length]);
  // };

  // const handlePrev = () => {
  //   setSelectedIndex((prev) => (prev - 1 + movies.length) % movies.length);
  //   onMovieClickBackGround(
  //     movies[(selectedIndex - 1 + movies.length) % movies.length].backdrop_path
  //   );
  //   onMovieClick(movies[(selectedIndex - 1 + movies.length) % movies.length]);
  // };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 1200, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -1200, behavior: "smooth" });
    }
  };

  const handleImageClick = (movie: Movie) => {
    onMovieClickBackGround(movie.backdrop_path);
    onMovieClick(movie);
    setSelectedMovieId(movie.id);
  };
  return (
    <div
      style={{
        position: "absolute",
        bottom: "6vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0%",
          transform: "translateY(-50%)",
          zIndex: "10",
        }}
      >
        <ArrowCarousel src={arrowLeft} onClick={scrollLeft} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "0%",
          transform: "translateY(-50%)",
          zIndex: "10",
        }}
      >
        <ArrowCarousel src={arrowRight} onClick={scrollRight} />
      </div>

      <div
        ref={carouselRef}
        style={{
          display: "flex",
          scrollBehavior: "smooth",
          margin: "20px 0",
          padding: "10px 0",
          overflow: "hidden",
          width: "100%",
          position: "relative",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleImageClick(movie)}
            style={{
              margin: "0 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: selectedMovieId === movie.id ? "8vw" : "6vw",
                  height: "auto",
                  borderRadius: "8px",
                  filter:
                    selectedMovieId === movie.id ? "none" : "brightness(0.7)",
                  transition: "width 1s ease, height 1s ease, filter 1s ease",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
