import { createSlice } from "@reduxjs/toolkit";
import { Media, MediaType } from "../utils/media.type";

interface StoreState {
  currentMediaType: MediaType;
  popularMovies: [];
  popularShows: [];
  movieDetails: null;
  showDetails: null;
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
};

const movieSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
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

export const { setCurrentMediaType, setPopularMedia, setMediaDetails } =
  movieSlice.actions;

export const selectCurrentMediaType = (state: StoreState) =>
  state.currentMediaType;

export const selectPopularMedia = (state: StoreState) =>
  state.currentMediaType === Media.shows
    ? state.popularShows
    : state.popularMovies;
    
export const selectMediaDetails = (state: StoreState) => state.currentMediaType === Media.shows
? state.showDetails
: state.movieDetails;

export default movieSlice.reducer;
