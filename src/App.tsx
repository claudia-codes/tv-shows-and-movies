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

const store = configureStore({
  reducer: moviesReducer,
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MainNavBar></MainNavBar>
          <Routes>
            <Route path="/" Component={MediaListPage} />
            <Route path="/details/:mediaId" Component={MediaDetailsPage} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
