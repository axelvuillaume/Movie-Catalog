import React, { useState } from "react";
import arrowLeft from "../../images/arrowLeft.png";
import arrowRight from "../../images/arrowRight.png";
import { Movie } from "../../types/Movies";
import ArrowCarousel from "./Carousel/ArrowCarousel";

interface CarouselMobileProps {
  movies: Movie[];
  onMovieClickBackGround: (backdropPath: string) => void;
  onMovieClick: (movie: Movie) => void;
}

const CarouselMobile: React.FC<CarouselMobileProps> = ({
  movies,
  onMovieClick,
  onMovieClickBackGround,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % movies.length);
    onMovieClickBackGround(
      movies[(selectedIndex + 1) % movies.length].backdrop_path
    );
    onMovieClick(movies[(selectedIndex + 1) % movies.length]);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + movies.length) % movies.length);
    onMovieClickBackGround(
      movies[(selectedIndex - 1 + movies.length) % movies.length].backdrop_path
    );
    onMovieClick(movies[(selectedIndex - 1 + movies.length) % movies.length]);
  };

  return (
    <div
      style={{
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
          zIndex: "1",
        }}
      >
        <ArrowCarousel src={arrowLeft} onClick={handlePrev} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "0%",
          transform: "translateY(-50%)",
          zIndex: "1",
        }}
      >
        <ArrowCarousel src={arrowRight} onClick={handleNext} />
      </div>
    </div>
  );
};

export default CarouselMobile;
