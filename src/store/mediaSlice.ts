import { createSlice } from "@reduxjs/toolkit";
import { Media, MediaItemDetails, MediaType } from "../utils/media.type";

interface StoreState {
  currentMediaType: MediaType;
  popularMovies: [];
  popularShows: [];
  movieDetails: MediaItemDetails | null;
  showDetails: MediaItemDetails | null;
  mediaImageBasePath: string;
}

interface Action {
  payload: any;
}
const initialState: StoreState = {
  currentMediaType: Media.movies, //show movies initially
  popularMovies: [],
  popularShows: [],
  movieDetails: null,
  showDetails: null,
  mediaImageBasePath: "",
};

const movieSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setMediaImageBasePath(state: StoreState, action: Action) {
      state.mediaImageBasePath =
        action.payload?.images.secure_base_url +
        action.payload?.images.poster_sizes.slice(-1); // last array of poster size is "original" size
    },
    setCurrentMediaType(state: StoreState, action: Action) {
      state.currentMediaType = action.payload;
    },
    setPopularMedia(state: StoreState, action: Action) {
      if (state.currentMediaType === Media.shows) {
        state.popularShows = action.payload;
      } else {
        state.popularMovies = action.payload;
      }
    },
    setMediaDetails(state: StoreState, action: Action) {
      if (state.currentMediaType === Media.shows) {
        state.showDetails = action.payload;
      } else {
        state.movieDetails = action.payload;
      }
    },
  },
});

export const { setCurrentMediaType, setPopularMedia, setMediaDetails, setMediaImageBasePath } =
  movieSlice.actions;

export const selectCurrentMediaType = (state: StoreState) =>
  state.currentMediaType;

export const selectPopularMedia = (state: StoreState) =>
  state.currentMediaType === Media.shows
    ? state.popularShows
    : state.popularMovies;

export const selectMediaDetails = (state: StoreState) =>
  state.currentMediaType === Media.shows
    ? state.showDetails
    : state.movieDetails;

export const selectMediaImageBasePath = (state: StoreState) =>
  state.mediaImageBasePath;

export default movieSlice.reducer