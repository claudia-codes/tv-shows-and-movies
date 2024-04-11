import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./store/mediaSlice";
import MediaList from "./pages/MediaList";

const store = configureStore({
  reducer: moviesReducer
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MediaList></MediaList>
      </div>
    </Provider>
  );
}

export default App;
