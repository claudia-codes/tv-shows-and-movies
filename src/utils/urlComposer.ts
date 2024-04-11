const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

export const configPath = `${BASE_URL}/configuration?api_key=${API_KEY}`;
const popularMoviesPath = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
const popularShowsPath = `${BASE_URL}/tv/popular?api_key=${API_KEY}`;
export const getMediaListPathByType = (mediaType: "movies" | "shows") => {
  //defaults to movies
  return mediaType === "shows" ? popularShowsPath : popularMoviesPath;
};

const popularMovieDetailsPath = (movie_id: string) =>
  `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`;
const popularShowDetailsPath = (show_id: string) =>
  `${BASE_URL}/tv/${show_id}?api_key=${API_KEY}`;

export const getMediaDetailsPathByType = (mediaType: "movies" | "shows") => {
  //defaults to movies
  return mediaType === "shows"
    ? popularShowDetailsPath
    : popularMovieDetailsPath;
};

export const getImagePath = (composedPath: string, backdrop_path: string) =>
  `${composedPath}${backdrop_path}/?api_key=${API_KEY}`;
