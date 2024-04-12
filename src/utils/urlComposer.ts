const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

export const configPath = `${BASE_URL}/configuration?api_key=${API_KEY}`;
const popularMoviesPath = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
const popularShowsPath = `${BASE_URL}/tv/popular?api_key=${API_KEY}`;
export const getMediaListPathByType = (mediaType: "movies" | "shows") => {
  //defaults to movies
  return mediaType === "shows" ? popularShowsPath : popularMoviesPath;
};

const popularMovieDetailsPath = (media_id: string) =>
  `${BASE_URL}/movie/${media_id}?api_key=${API_KEY}`;
const popularShowDetailsPath = (media_id: string) =>
  `${BASE_URL}/tv/${media_id}?api_key=${API_KEY}`;

export const getMediaDetailsPathByType = (mediaType: "movies" | "shows", media_id: string) => {
  //defaults to movies
  return mediaType === "shows"
    ? popularShowDetailsPath(media_id)
    : popularMovieDetailsPath(media_id);
};

const similarMoviesPath = (media_id: string) =>
  `${BASE_URL}/movie/${media_id}/similar?api_key=${API_KEY}`;
const similarShowsPath = (show_id: string) =>
  `${BASE_URL}/tv/${show_id}/similar?api_key=${API_KEY}`;

export const getSimilarMediaPath = (mediaType: "movies" | "shows", media_id: string) => {
  //defaults to movies
  return mediaType === "shows"
    ? similarShowsPath(media_id)
    : similarMoviesPath(media_id);
};

export const getImagePath = (
  composedPath: string,
  backdrop_path: string | undefined
) =>
composedPath && backdrop_path ? `${composedPath}${backdrop_path}/?api_key=${API_KEY}` : "";
