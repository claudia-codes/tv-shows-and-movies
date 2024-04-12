import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./store/mediaSlice";
import MediaListPage from "./pages/MediaListPage";
import MainNavBar from "./components/MainNavBar";
import MediaDetailsPage from "./pages/MediaDetailsPage";
import ErrorModal from "./components/ErrorModal";

const store = configureStore({
  reducer: moviesReducer,
});
const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
const error = {
  title: "Missing Movie DB API Key",
  message: "Please provide a valid movie DB API Key in order to access the application."
}

function App() {
  return (
    <Provider store={store}>
      {API_KEY && (
        <Router>
          <div className="App">
            <MainNavBar></MainNavBar>
            <Routes>
              <Route path="/" Component={MediaListPage} />
              <Route path="/details/:mediaId" Component={MediaDetailsPage} />
            </Routes>
          </div>
        </Router>
      )}
      {!API_KEY && <ErrorModal error={error}></ErrorModal>}
    </Provider>
  );
}

export default App;
