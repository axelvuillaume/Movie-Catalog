export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  original_title: string;
  genres: { id: number; name: string }[];
  runtime: number;
  budget: number;
  production_companies: { id: number; name: string }[];
}
