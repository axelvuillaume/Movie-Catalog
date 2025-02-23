// src/pages/Movies.tsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ButtonNav from "../components/Movies/ButtonNav";
import Card from "../components/Movies/Card";
import Filters from "../components/Movies/Filters";
import { fetchMovies } from "../services/moviesService";
import { Movie } from "../types/Movies";

const Movies: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [sortby, setSortby] = useState<string>(
    searchParams.get("sortby") || "popularity"
  );
  const [country, setCountry] = useState<string>(
    searchParams.get("country") || "All"
  );
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setSearchParams({ sortby, country });

    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies(page, sortby, country);
        setMovies(moviesData);
      } catch (error) {
        console.error("Erreur lors du chargement des films :", error);
      }
    };

    loadMovies();
  }, [sortby, country, page, setSearchParams]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo(0, 0);
  };

  return (
    <div
      style={{
        padding: "20px",
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5%",
      }}
    >
      <Filters onSortByChange={setSortby} onCountryChange={setCountry} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          width: "100%",
          maxWidth: "calc(5 * 200px + 4 * 20px)",
        }}
      >
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <ButtonNav label="Previous" onClick={handlePrevious} />
        <span>Page {page}</span>
        <ButtonNav label="Next" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Movies;
