import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./store/mediaSlice";
import MediaListPage from "./pages/MediaListPage";
import MainNavBar from "./components/MainNavBar";

const store = configureStore({
  reducer: moviesReducer
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainNavBar></MainNavBar>
        <MediaListPage></MediaListPage>
      </div>
    </Provider>
  );
}

export default App;
