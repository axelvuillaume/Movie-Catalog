const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = `Bearer ${process.env.REACT_APP_API_KEY ?? ""}`;

const fetchFromAPI = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
};

export const fetchMovies = async (
  page: number,
  sortby: string,
  country: string
) => {
  let url = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}`;

  if (country !== "All") {
    url += `&with_origin_country=${country}`;
  }

  switch (sortby) {
    case "Popularity":
      url += "&sort_by=popularity.desc";
      break;
    case "Popularity This Month": {
      const start = new Date();
      start.setDate(1);
      const end = new Date(start);
      end.setMonth(start.getMonth() + 1);

      url += `&sort_by=popularity.desc&primary_release_date.gte=${
        start.toISOString().split("T")[0]
      }&primary_release_date.lte=${end.toISOString().split("T")[0]}`;
      break;
    }
    case "Popularity This Year":
      const year = new Date().getFullYear();
      url += `&sort_by=popularity.desc&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`;
      break;
    case "release_date":
      url += "&sort_by=release_date.desc";
      break;
    case "vote_average":
      url += "&sort_by=vote_average.desc";
      break;
  }

  const data = await fetchFromAPI(url);
  return data ? data.results : [];
};

export const fetchMovieDetails = async (id: string) => {
  return await fetchFromAPI(`/movie/${id}?language=en-US`);
};

export const fetchMovieVideos = async (id: string) => {
  const data = await fetchFromAPI(`/movie/${id}/videos?language=en-US`);
  return data ? data.results : [];
};

export const fetchMovieCredits = async (id: string) => {
  return await fetchFromAPI(`/movie/${id}/credits`);
};

export const fetchMovieNowPlaying = async () => {
  return await fetchFromAPI(`/movie/now_playing`);
};
