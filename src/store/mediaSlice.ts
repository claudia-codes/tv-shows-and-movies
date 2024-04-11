import { createSlice } from "@reduxjs/toolkit";

interface StoreState {
  currentView: "movies" | "shows";
  popularMovies: [];
  popularShows: [];
  movieDetails: null;
  showDetails: null;
}

interface Action {
  payload: any;
}
const initialState: StoreState = {
  currentView: "movies",
  popularMovies: [],
  popularShows: [],
  movieDetails: null,
  showDetails: null,
};

const movieSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setCurrentView(state: StoreState, action: Action) {
      state.currentView = action.payload;
    },
    setPopularMovies(state: StoreState, action: Action) {
      state.popularMovies = action.payload;
    },
    setMovieDetails(state: StoreState, action: Action) {
      state.movieDetails = action.payload;
    },
    setShowDetails(state: StoreState, action: Action) {
      state.showDetails = action.payload;
    },
    setPopularShows(state: StoreState, action: Action) {
      state.popularShows = action.payload;
    },
  },
});

export const {
  setCurrentView,
  setPopularMovies,
  setMovieDetails,
  setShowDetails,
} = movieSlice.actions;

export const selectCurrentView = (state: StoreState) => state.currentView;
export const selectPopularShows = (state: StoreState) => state.popularShows;
export const selectPopularMovies = (state: StoreState) => state.popularMovies;
export const selectMovieDetails = (state:StoreState) => state.movieDetails;
export const selectShowDetails = (state:StoreState) => state.showDetails;

export default movieSlice.reducer;