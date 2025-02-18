import React, { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png";
import { Movie } from "../types";
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

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleImageClick = (movie: Movie) => {
    onMovieClickBackGround(movie.backdrop_path);
    onMovieClick(movie);
    setSelectedMovieId(movie.id);
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          bottom: "13%",
          left: "0%",
          zIndex: "10",
        }}
      >
        <ArrowCarousel src={arrowLeft} onClick={scrollLeft} />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "13%",
          right: "0%",
          zIndex: "10",
        }}
      >
        <ArrowCarousel src={arrowRight} onClick={scrollRight} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            scrollBehavior: "smooth",
            margin: "20px 0",
            padding: "10px 0",
            overflow: "hidden",
            width: "100%",
            position: "absolute",
            bottom: "4%",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleImageClick(movie)}
              style={{
                margin: "0 20px",
                transition: "transform 0.3s ease",
                display: "flex",
                justifyContent: "center", // Centrer les images
                alignItems: "center",
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
                      selectedMovieId === movie.id ? "none" : "brightness(0.5)",
                    transition:
                      "width 0.5s ease, height 0.5s ease, filter 0.5s ease",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
