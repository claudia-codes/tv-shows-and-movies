export enum Media {
  movies = "movies",
  shows = "shows",
}
export type MediaType = Media.movies | Media.shows;

export interface MediaItem {
  id: string;
  title?: string;
  name?: string;
  overview: string;
  vote_average: string;
  backdrop_path: string;
}
