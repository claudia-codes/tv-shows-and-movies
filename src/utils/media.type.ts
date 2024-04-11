export enum Media {
  movies = "movies",
  shows = "shows",
}
export type MediaType = Media.movies | Media.shows;

export interface MediaItemDetails {
  title: string;
  overview: string;
  backdrop_path: string;
}

export interface MediaItem {
  id: string;
  title?: string;
  name?: string;
  vote_average: string;
  backdrop_path: string;
}
