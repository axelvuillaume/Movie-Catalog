import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ButtonNav from "../components/Movies/ButtonNav";
import Card from "../components/Movies/Card";
import Filters from "../components/Movies/Filters";
import { Movie } from "../types";

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

    const fetchFilms = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}`;

        if (country !== "All") {
          url += `&with_origin_country=${country}`;
        }

        if (sortby === "Popularity") {
          url += `&sort_by=popularity.desc`;
        } else if (sortby === "Popularity This Month") {
          const startOfMonth = new Date();
          startOfMonth.setDate(1);
          const endOfMonth = new Date(startOfMonth);
          endOfMonth.setMonth(startOfMonth.getMonth() + 1);

          const start = startOfMonth.toISOString().split("T")[0];
          const end = endOfMonth.toISOString().split("T")[0];

          url += `&sort_by=popularity.desc&primary_release_date.gte=${start}&primary_release_date.lte=${end}`;
        } else if (sortby === "Popularity This Year") {
          const currentYear = new Date().getFullYear();
          url += `&sort_by=popularity.desc&primary_release_date.gte=${currentYear}-01-01&primary_release_date.lte=${currentYear}-12-31`;
        } else if (sortby === "release_date") {
          url += `&sort_by=release_date.desc`;
        } else if (sortby === "vote_average") {
          url += `&sort_by=vote_average.desc`;
        }

        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5NTZkMjQ1MjkwYzU5MTljNmUxMjFlMjMwMzU2ZiIsIm5iZiI6MTczOTg4NDg4Ny4yMzUwMDAxLCJzdWIiOiI2N2I0ODk1NzVkYzk4OGIxYmI5ZmNiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.38PUZIT9Z-ybX4JPzH-lFLA70DwSBVNcFxvxncRiGiw`, // Remplace avec ta clé API
          },
        });
        console.log(url);

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
      }
    };

    fetchFilms();
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
