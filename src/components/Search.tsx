import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../types";
import SearchBar from "./Movies/SearchBar";

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchMovies = async () => {
      if (!searchQuery) {
        setMovies([]);
        setShowResults(false);
        return;
      }

      try {
        let url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5NTZkMjQ1MjkwYzU5MTljNmUxMjFlMjMwMzU2ZiIsIm5iZiI6MTczOTg4NDg4Ny4yMzUwMDAxLCJzdWIiOiI2N2I0ODk1NzVkYzk4OGIxYmI5ZmNiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.38PUZIT9Z-ybX4JPzH-lFLA70DwSBVNcFxvxncRiGiw`,
          },
        });
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
        setShowResults(true);
      } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
      }
    };
    fetchSearchMovies();
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
        setMovies([]);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMoreInfoClick = (movie: Movie) => {
    navigate(`/movie/${movie.id}`);
    setShowResults(false);
  };

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
      }}
      ref={searchRef}
    >
      <SearchBar onSearch={setSearchQuery} />

      {showResults && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            width: "20vw",
            backgroundColor: "rgba(31, 27, 27, 0.74)",
            color: "white",
            padding: "10px",
            maxHeight: "300px",
            overflowY: "auto",
            borderRadius: "10px",
            fontSize: "0.8vw",
          }}
        >
          {movies.length === 0 ? (
            <div>No Result</div>
          ) : (
            movies.map((movie) => (
              <div
                key={movie.id}
                style={{
                  padding: "5px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  cursor: "pointer",
                }}
                onClick={() => handleMoreInfoClick(movie)}
              >
                <div style={{ fontSize: "14px", margin: "5px 0" }}>
                  {movie.title}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
